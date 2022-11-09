import { SpeakeasyBase } from "../../../internal/utils/utils";
import { BackendEnvironment } from "./backendenvironment";
/**
 *  The result structure for the list backend environments result.
**/
export declare class ListBackendEnvironmentsResult extends SpeakeasyBase {
    backendEnvironments: BackendEnvironment[];
    nextToken?: string;
}
