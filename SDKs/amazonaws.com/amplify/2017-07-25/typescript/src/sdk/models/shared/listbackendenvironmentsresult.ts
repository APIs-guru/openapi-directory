import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BackendEnvironment } from "./backendenvironment";



// ListBackendEnvironmentsResult
/** 
 *  The result structure for the list backend environments result. 
**/
export class ListBackendEnvironmentsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backendEnvironments", elemType: BackendEnvironment })
  backendEnvironments: BackendEnvironment[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
