import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { App } from "./app";


// ListAppsResult
/** 
 *  The result structure for an Amplify app list request. 
**/
export class ListAppsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=apps", elemType: shared.App })
  apps: App[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
