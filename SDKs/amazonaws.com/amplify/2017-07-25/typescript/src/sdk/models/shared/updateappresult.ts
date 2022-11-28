import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { App } from "./app";



// UpdateAppResult
/** 
 *  The result structure for an Amplify app update request. 
**/
export class UpdateAppResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=app" })
  app: App;
}
