import { SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayAttachmentResourceTypeEnum } from "./transitgatewayattachmentresourcetypeenum";
import { TransitGatewayAssociationStateEnum } from "./transitgatewayassociationstateenum";
/**
 * Describes an association between a route table and a resource attachment.
**/
export declare class TransitGatewayRouteTableAssociation extends SpeakeasyBase {
    resourceId?: string;
    resourceType?: TransitGatewayAttachmentResourceTypeEnum;
    state?: TransitGatewayAssociationStateEnum;
    transitGatewayAttachmentId?: string;
}
