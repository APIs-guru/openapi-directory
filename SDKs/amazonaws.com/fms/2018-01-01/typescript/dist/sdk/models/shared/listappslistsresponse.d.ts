import { SpeakeasyBase } from "../../../internal/utils";
import { AppsListDataSummary } from "./appslistdatasummary";
export declare class ListAppsListsResponse extends SpeakeasyBase {
    appsLists?: AppsListDataSummary[];
    nextToken?: string;
}
