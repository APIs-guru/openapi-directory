import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppsListData } from "./appslistdata";
import { Tag } from "./tag";



export class PutAppsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppsList" })
  appsList: AppsListData;

  @SpeakeasyMetadata({ data: "json, name=TagList", elemType: Tag })
  tagList?: Tag[];
}
