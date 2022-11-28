import { SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayAttachmentAssociation } from "./transitgatewayattachmentassociation";
import { TransitGatewayAttachmentResourceTypeEnum } from "./transitgatewayattachmentresourcetypeenum";
import { TransitGatewayAttachmentStateEnum } from "./transitgatewayattachmentstateenum";
import { Tag } from "./tag";
/**
 * Describes an attachment between a resource and a transit gateway.
**/
export declare class TransitGatewayAttachment extends SpeakeasyBase {
    association?: TransitGatewayAttachmentAssociation;
    creationTime?: Date;
    resourceId?: string;
    resourceOwnerId?: string;
    resourceType?: TransitGatewayAttachmentResourceTypeEnum;
    state?: TransitGatewayAttachmentStateEnum;
    tags?: Tag[];
    transitGatewayAttachmentId?: string;
    transitGatewayId?: string;
    transitGatewayOwnerId?: string;
}
