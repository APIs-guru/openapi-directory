import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientVpnEndpointStatusCodeEnum } from "./clientvpnendpointstatuscodeenum";



// ClientVpnEndpointStatus
/** 
 * Describes the state of a Client VPN endpoint.
**/
export class ClientVpnEndpointStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: ClientVpnEndpointStatusCodeEnum;

  @SpeakeasyMetadata()
  message?: string;
}
