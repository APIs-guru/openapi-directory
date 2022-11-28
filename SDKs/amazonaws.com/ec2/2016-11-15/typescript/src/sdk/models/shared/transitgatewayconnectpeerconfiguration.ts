import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayAttachmentBgpConfiguration } from "./transitgatewayattachmentbgpconfiguration";
import { ProtocolValueEnum } from "./protocolvalueenum";



// TransitGatewayConnectPeerConfiguration
/** 
 * Describes the Connect peer details.
**/
export class TransitGatewayConnectPeerConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: TransitGatewayAttachmentBgpConfiguration })
  bgpConfigurations?: TransitGatewayAttachmentBgpConfiguration[];

  @SpeakeasyMetadata()
  insideCidrBlocks?: string[];

  @SpeakeasyMetadata()
  peerAddress?: string;

  @SpeakeasyMetadata()
  protocol?: ProtocolValueEnum;

  @SpeakeasyMetadata()
  transitGatewayAddress?: string;
}
