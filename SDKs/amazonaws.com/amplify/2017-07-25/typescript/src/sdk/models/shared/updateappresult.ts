import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { App } from "./app";


// UpdateAppResult
/** 
 *  The result structure for an Amplify app update request. 
**/
export class UpdateAppResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=app" })
  app: App;
}
