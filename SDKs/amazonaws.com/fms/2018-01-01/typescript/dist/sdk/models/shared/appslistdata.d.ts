import { SpeakeasyBase } from "../../../internal/utils";
import { App } from "./app";
/**
 * An Firewall Manager applications list.
**/
export declare class AppsListData extends SpeakeasyBase {
    appsList: App[];
    createTime?: Date;
    lastUpdateTime?: Date;
    listId?: string;
    listName: string;
    listUpdateToken?: string;
    previousAppsList?: Map<string, App[]>;
}
