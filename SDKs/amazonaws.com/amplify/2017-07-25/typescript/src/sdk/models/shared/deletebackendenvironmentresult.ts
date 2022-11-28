import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BackendEnvironment } from "./backendenvironment";



// DeleteBackendEnvironmentResult
/** 
 *  The result structure of the delete backend environment result. 
**/
export class DeleteBackendEnvironmentResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backendEnvironment" })
  backendEnvironment: BackendEnvironment;
}
