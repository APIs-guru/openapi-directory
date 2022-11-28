import { SpeakeasyBase } from "../../../internal/utils";
import { App } from "./app";
/**
 * Details of the Firewall Manager applications list.
**/
export declare class AppsListDataSummary extends SpeakeasyBase {
    appsList?: App[];
    listArn?: string;
    listId?: string;
    listName?: string;
}
