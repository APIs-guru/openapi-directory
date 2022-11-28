import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BackendEnvironment } from "./backendenvironment";



// GetBackendEnvironmentResult
/** 
 *  The result structure for the get backend environment result. 
**/
export class GetBackendEnvironmentResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backendEnvironment" })
  backendEnvironment: BackendEnvironment;
}
