import { SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayAttachmentBgpConfiguration } from "./transitgatewayattachmentbgpconfiguration";
import { ProtocolValueEnum } from "./protocolvalueenum";
/**
 * Describes the Connect peer details.
**/
export declare class TransitGatewayConnectPeerConfiguration extends SpeakeasyBase {
    bgpConfigurations?: TransitGatewayAttachmentBgpConfiguration[];
    insideCidrBlocks?: string[];
    peerAddress?: string;
    protocol?: ProtocolValueEnum;
    transitGatewayAddress?: string;
}
