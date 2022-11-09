import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BackendEnvironment } from "./backendenvironment";


// DeleteBackendEnvironmentResult
/** 
 *  The result structure of the delete backend environment result. 
**/
export class DeleteBackendEnvironmentResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=backendEnvironment" })
  backendEnvironment: BackendEnvironment;
}
