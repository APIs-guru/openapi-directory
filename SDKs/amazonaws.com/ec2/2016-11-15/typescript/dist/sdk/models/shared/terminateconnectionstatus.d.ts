import { SpeakeasyBase } from "../../../internal/utils";
import { ClientVpnConnectionStatus } from "./clientvpnconnectionstatus";
/**
 * Information about a terminated Client VPN endpoint client connection.
**/
export declare class TerminateConnectionStatus extends SpeakeasyBase {
    connectionId?: string;
    currentStatus?: ClientVpnConnectionStatus;
    previousStatus?: ClientVpnConnectionStatus;
}
