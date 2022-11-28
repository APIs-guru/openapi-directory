import { SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayConnectOptions } from "./transitgatewayconnectoptions";
import { TransitGatewayAttachmentStateEnum } from "./transitgatewayattachmentstateenum";
import { Tag } from "./tag";
/**
 * Describes a transit gateway Connect attachment.
**/
export declare class TransitGatewayConnect extends SpeakeasyBase {
    creationTime?: Date;
    options?: TransitGatewayConnectOptions;
    state?: TransitGatewayAttachmentStateEnum;
    tags?: Tag[];
    transitGatewayAttachmentId?: string;
    transitGatewayId?: string;
    transportTransitGatewayAttachmentId?: string;
}
