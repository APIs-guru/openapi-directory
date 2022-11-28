import { SpeakeasyBase } from "../../../internal/utils";
import { AppsListData } from "./appslistdata";
import { Tag } from "./tag";
export declare class PutAppsListRequest extends SpeakeasyBase {
    appsList: AppsListData;
    tagList?: Tag[];
}
