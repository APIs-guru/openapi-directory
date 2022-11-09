import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BackendEnvironment } from "./backendenvironment";


// CreateBackendEnvironmentResult
/** 
 *  The result structure for the create backend environment request. 
**/
export class CreateBackendEnvironmentResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=backendEnvironment" })
  backendEnvironment: BackendEnvironment;
}
