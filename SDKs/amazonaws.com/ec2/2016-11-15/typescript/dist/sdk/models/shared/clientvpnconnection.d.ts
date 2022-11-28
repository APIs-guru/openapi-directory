import { SpeakeasyBase } from "../../../internal/utils";
import { ClientVpnConnectionStatus } from "./clientvpnconnectionstatus";
/**
 * Describes a client connection.
**/
export declare class ClientVpnConnection extends SpeakeasyBase {
    clientIp?: string;
    clientVpnEndpointId?: string;
    commonName?: string;
    connectionEndTime?: string;
    connectionEstablishedTime?: string;
    connectionId?: string;
    egressBytes?: string;
    egressPackets?: string;
    ingressBytes?: string;
    ingressPackets?: string;
    postureComplianceStatuses?: string[];
    status?: ClientVpnConnectionStatus;
    timestamp?: string;
    username?: string;
}
