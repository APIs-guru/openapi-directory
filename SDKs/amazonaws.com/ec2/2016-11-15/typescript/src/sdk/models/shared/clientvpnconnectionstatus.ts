import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientVpnConnectionStatusCodeEnum } from "./clientvpnconnectionstatuscodeenum";



// ClientVpnConnectionStatus
/** 
 * Describes the status of a client connection.
**/
export class ClientVpnConnectionStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: ClientVpnConnectionStatusCodeEnum;

  @SpeakeasyMetadata()
  message?: string;
}
