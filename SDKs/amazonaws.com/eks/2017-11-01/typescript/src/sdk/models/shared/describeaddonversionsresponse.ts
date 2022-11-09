import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AddonInfo } from "./addoninfo";


export class DescribeAddonVersionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=addons", elemType: shared.AddonInfo })
  addons?: AddonInfo[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
