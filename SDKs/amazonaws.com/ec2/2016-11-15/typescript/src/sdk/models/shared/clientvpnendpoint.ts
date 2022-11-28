import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssociatedTargetNetwork } from "./associatedtargetnetwork";
import { ClientVpnAuthentication } from "./clientvpnauthentication";
import { ClientConnectResponseOptions } from "./clientconnectresponseoptions";
import { ConnectionLogResponseOptions } from "./connectionlogresponseoptions";
import { ClientVpnEndpointStatus } from "./clientvpnendpointstatus";
import { Tag } from "./tag";
import { TransportProtocolEnum } from "./transportprotocolenum";
import { VpnProtocolEnum } from "./vpnprotocolenum";



// ClientVpnEndpoint
/** 
 * Describes a Client VPN endpoint.
**/
export class ClientVpnEndpoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AssociatedTargetNetwork })
  associatedTargetNetworks?: AssociatedTargetNetwork[];

  @SpeakeasyMetadata({ elemType: ClientVpnAuthentication })
  authenticationOptions?: ClientVpnAuthentication[];

  @SpeakeasyMetadata()
  clientCidrBlock?: string;

  @SpeakeasyMetadata()
  clientConnectOptions?: ClientConnectResponseOptions;

  @SpeakeasyMetadata()
  clientVpnEndpointId?: string;

  @SpeakeasyMetadata()
  connectionLogOptions?: ConnectionLogResponseOptions;

  @SpeakeasyMetadata()
  creationTime?: string;

  @SpeakeasyMetadata()
  deletionTime?: string;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  dnsName?: string;

  @SpeakeasyMetadata()
  dnsServers?: string[];

  @SpeakeasyMetadata()
  securityGroupIds?: string[];

  @SpeakeasyMetadata()
  selfServicePortalUrl?: string;

  @SpeakeasyMetadata()
  serverCertificateArn?: string;

  @SpeakeasyMetadata()
  splitTunnel?: boolean;

  @SpeakeasyMetadata()
  status?: ClientVpnEndpointStatus;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  transportProtocol?: TransportProtocolEnum;

  @SpeakeasyMetadata()
  vpcId?: string;

  @SpeakeasyMetadata()
  vpnPort?: number;

  @SpeakeasyMetadata()
  vpnProtocol?: VpnProtocolEnum;
}
