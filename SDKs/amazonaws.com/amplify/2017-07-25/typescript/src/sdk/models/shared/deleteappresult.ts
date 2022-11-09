import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { App } from "./app";


// DeleteAppResult
/** 
 *  The result structure for the delete app request. 
**/
export class DeleteAppResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=app" })
  app: App;
}
