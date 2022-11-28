import { SpeakeasyBase } from "../../../internal/utils";
import { ClientVpnConnectionStatusCodeEnum } from "./clientvpnconnectionstatuscodeenum";
/**
 * Describes the status of a client connection.
**/
export declare class ClientVpnConnectionStatus extends SpeakeasyBase {
    code?: ClientVpnConnectionStatusCodeEnum;
    message?: string;
}
