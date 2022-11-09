import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AppsListData } from "./appslistdata";


export class PutAppsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppsList" })
  appsList?: AppsListData;

  @Metadata({ data: "json, name=AppsListArn" })
  appsListArn?: string;
}
