import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BackendEnvironment } from "./backendenvironment";


// ListBackendEnvironmentsResult
/** 
 *  The result structure for the list backend environments result. 
**/
export class ListBackendEnvironmentsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=backendEnvironments", elemType: shared.BackendEnvironment })
  backendEnvironments: BackendEnvironment[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
