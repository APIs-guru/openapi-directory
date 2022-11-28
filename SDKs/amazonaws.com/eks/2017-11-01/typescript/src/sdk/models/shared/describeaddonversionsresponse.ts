import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AddonInfo } from "./addoninfo";



export class DescribeAddonVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addons", elemType: AddonInfo })
  addons?: AddonInfo[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
