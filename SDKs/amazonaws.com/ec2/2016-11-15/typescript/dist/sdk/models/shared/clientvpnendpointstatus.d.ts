import { SpeakeasyBase } from "../../../internal/utils";
import { ClientVpnEndpointStatusCodeEnum } from "./clientvpnendpointstatuscodeenum";
/**
 * Describes the state of a Client VPN endpoint.
**/
export declare class ClientVpnEndpointStatus extends SpeakeasyBase {
    code?: ClientVpnEndpointStatusCodeEnum;
    message?: string;
}
