import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AppsListData } from "./appslistdata";
import { Tag } from "./tag";


export class PutAppsListRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppsList" })
  appsList: AppsListData;

  @Metadata({ data: "json, name=TagList", elemType: shared.Tag })
  tagList?: Tag[];
}
