import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientVpnConnectionStatus } from "./clientvpnconnectionstatus";



// ClientVpnConnection
/** 
 * Describes a client connection.
**/
export class ClientVpnConnection extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientIp?: string;

  @SpeakeasyMetadata()
  clientVpnEndpointId?: string;

  @SpeakeasyMetadata()
  commonName?: string;

  @SpeakeasyMetadata()
  connectionEndTime?: string;

  @SpeakeasyMetadata()
  connectionEstablishedTime?: string;

  @SpeakeasyMetadata()
  connectionId?: string;

  @SpeakeasyMetadata()
  egressBytes?: string;

  @SpeakeasyMetadata()
  egressPackets?: string;

  @SpeakeasyMetadata()
  ingressBytes?: string;

  @SpeakeasyMetadata()
  ingressPackets?: string;

  @SpeakeasyMetadata()
  postureComplianceStatuses?: string[];

  @SpeakeasyMetadata()
  status?: ClientVpnConnectionStatus;

  @SpeakeasyMetadata()
  timestamp?: string;

  @SpeakeasyMetadata()
  username?: string;
}
