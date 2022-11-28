import { SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayConnectPeerConfiguration } from "./transitgatewayconnectpeerconfiguration";
import { TransitGatewayConnectPeerStateEnum } from "./transitgatewayconnectpeerstateenum";
import { Tag } from "./tag";
/**
 * Describes a transit gateway Connect peer.
**/
export declare class TransitGatewayConnectPeer extends SpeakeasyBase {
    connectPeerConfiguration?: TransitGatewayConnectPeerConfiguration;
    creationTime?: Date;
    state?: TransitGatewayConnectPeerStateEnum;
    tags?: Tag[];
    transitGatewayAttachmentId?: string;
    transitGatewayConnectPeerId?: string;
}
