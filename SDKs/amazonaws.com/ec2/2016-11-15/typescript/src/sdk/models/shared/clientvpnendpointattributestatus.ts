import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientVpnEndpointAttributeStatusCodeEnum } from "./clientvpnendpointattributestatuscodeenum";



// ClientVpnEndpointAttributeStatus
/** 
 * Describes the status of the Client VPN endpoint attribute.
**/
export class ClientVpnEndpointAttributeStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: ClientVpnEndpointAttributeStatusCodeEnum;

  @SpeakeasyMetadata()
  message?: string;
}
