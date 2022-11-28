import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BackendEnvironment } from "./backendenvironment";



// CreateBackendEnvironmentResult
/** 
 *  The result structure for the create backend environment request. 
**/
export class CreateBackendEnvironmentResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backendEnvironment" })
  backendEnvironment: BackendEnvironment;
}
