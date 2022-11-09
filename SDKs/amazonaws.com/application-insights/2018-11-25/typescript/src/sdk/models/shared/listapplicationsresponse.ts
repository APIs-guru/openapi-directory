import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApplicationInfo } from "./applicationinfo";


export class ListApplicationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationInfoList", elemType: shared.ApplicationInfo })
  applicationInfoList?: ApplicationInfo[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
