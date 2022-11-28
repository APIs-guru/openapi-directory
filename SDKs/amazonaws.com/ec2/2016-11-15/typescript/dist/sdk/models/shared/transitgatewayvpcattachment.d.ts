import { SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayVpcAttachmentOptions } from "./transitgatewayvpcattachmentoptions";
import { TransitGatewayAttachmentStateEnum } from "./transitgatewayattachmentstateenum";
import { Tag } from "./tag";
/**
 * Describes a VPC attachment.
**/
export declare class TransitGatewayVpcAttachment extends SpeakeasyBase {
    creationTime?: Date;
    options?: TransitGatewayVpcAttachmentOptions;
    state?: TransitGatewayAttachmentStateEnum;
    subnetIds?: string[];
    tags?: Tag[];
    transitGatewayAttachmentId?: string;
    transitGatewayId?: string;
    vpcId?: string;
    vpcOwnerId?: string;
}
