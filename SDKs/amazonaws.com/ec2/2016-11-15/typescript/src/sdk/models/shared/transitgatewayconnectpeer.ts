import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayConnectPeerConfiguration } from "./transitgatewayconnectpeerconfiguration";
import { TransitGatewayConnectPeerStateEnum } from "./transitgatewayconnectpeerstateenum";
import { Tag } from "./tag";



// TransitGatewayConnectPeer
/** 
 * Describes a transit gateway Connect peer.
**/
export class TransitGatewayConnectPeer extends SpeakeasyBase {
  @SpeakeasyMetadata()
  connectPeerConfiguration?: TransitGatewayConnectPeerConfiguration;

  @SpeakeasyMetadata()
  creationTime?: Date;

  @SpeakeasyMetadata()
  state?: TransitGatewayConnectPeerStateEnum;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  transitGatewayAttachmentId?: string;

  @SpeakeasyMetadata()
  transitGatewayConnectPeerId?: string;
}
