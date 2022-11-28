import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppsListData } from "./appslistdata";



export class PutAppsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppsList" })
  appsList?: AppsListData;

  @SpeakeasyMetadata({ data: "json, name=AppsListArn" })
  appsListArn?: string;
}
