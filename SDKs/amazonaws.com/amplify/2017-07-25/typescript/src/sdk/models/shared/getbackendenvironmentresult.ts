import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BackendEnvironment } from "./backendenvironment";


// GetBackendEnvironmentResult
/** 
 *  The result structure for the get backend environment result. 
**/
export class GetBackendEnvironmentResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=backendEnvironment" })
  backendEnvironment: BackendEnvironment;
}
