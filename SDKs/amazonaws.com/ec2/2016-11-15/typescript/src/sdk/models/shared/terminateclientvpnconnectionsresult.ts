import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TerminateConnectionStatus } from "./terminateconnectionstatus";



export class TerminateClientVpnConnectionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientVpnEndpointId?: string;

  @SpeakeasyMetadata({ elemType: TerminateConnectionStatus })
  connectionStatuses?: TerminateConnectionStatus[];

  @SpeakeasyMetadata()
  username?: string;
}
