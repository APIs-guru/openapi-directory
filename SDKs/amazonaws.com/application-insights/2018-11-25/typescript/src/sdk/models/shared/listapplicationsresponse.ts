import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationInfo } from "./applicationinfo";



export class ListApplicationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationInfoList", elemType: ApplicationInfo })
  applicationInfoList?: ApplicationInfo[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
