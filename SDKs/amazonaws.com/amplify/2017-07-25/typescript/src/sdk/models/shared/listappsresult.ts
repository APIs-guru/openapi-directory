import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { App } from "./app";



// ListAppsResult
/** 
 *  The result structure for an Amplify app list request. 
**/
export class ListAppsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apps", elemType: App })
  apps: App[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
