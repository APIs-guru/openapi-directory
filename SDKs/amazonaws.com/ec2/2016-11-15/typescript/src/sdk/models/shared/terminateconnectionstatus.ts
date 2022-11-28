import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientVpnConnectionStatus } from "./clientvpnconnectionstatus";



// TerminateConnectionStatus
/** 
 * Information about a terminated Client VPN endpoint client connection.
**/
export class TerminateConnectionStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  connectionId?: string;

  @SpeakeasyMetadata()
  currentStatus?: ClientVpnConnectionStatus;

  @SpeakeasyMetadata()
  previousStatus?: ClientVpnConnectionStatus;
}
