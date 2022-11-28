import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { App } from "./app";



// DeleteAppResult
/** 
 *  The result structure for the delete app request. 
**/
export class DeleteAppResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=app" })
  app: App;
}
