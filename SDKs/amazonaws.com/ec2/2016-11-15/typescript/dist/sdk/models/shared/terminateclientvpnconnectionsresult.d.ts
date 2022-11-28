import { SpeakeasyBase } from "../../../internal/utils";
import { TerminateConnectionStatus } from "./terminateconnectionstatus";
export declare class TerminateClientVpnConnectionsResult extends SpeakeasyBase {
    clientVpnEndpointId?: string;
    connectionStatuses?: TerminateConnectionStatus[];
    username?: string;
}
