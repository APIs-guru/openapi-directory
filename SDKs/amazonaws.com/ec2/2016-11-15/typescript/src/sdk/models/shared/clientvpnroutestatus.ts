import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientVpnRouteStatusCodeEnum } from "./clientvpnroutestatuscodeenum";



// ClientVpnRouteStatus
/** 
 * Describes the state of a Client VPN endpoint route.
**/
export class ClientVpnRouteStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: ClientVpnRouteStatusCodeEnum;

  @SpeakeasyMetadata()
  message?: string;
}
