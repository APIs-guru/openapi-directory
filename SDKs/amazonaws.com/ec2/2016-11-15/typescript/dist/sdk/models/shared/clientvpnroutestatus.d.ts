import { SpeakeasyBase } from "../../../internal/utils";
import { ClientVpnRouteStatusCodeEnum } from "./clientvpnroutestatuscodeenum";
/**
 * Describes the state of a Client VPN endpoint route.
**/
export declare class ClientVpnRouteStatus extends SpeakeasyBase {
    code?: ClientVpnRouteStatusCodeEnum;
    message?: string;
}
