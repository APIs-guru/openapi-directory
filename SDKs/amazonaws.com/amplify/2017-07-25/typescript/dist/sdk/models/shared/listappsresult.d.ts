import { SpeakeasyBase } from "../../../internal/utils";
import { App } from "./app";
/**
 *  The result structure for an Amplify app list request.
**/
export declare class ListAppsResult extends SpeakeasyBase {
    apps: App[];
    nextToken?: string;
}
