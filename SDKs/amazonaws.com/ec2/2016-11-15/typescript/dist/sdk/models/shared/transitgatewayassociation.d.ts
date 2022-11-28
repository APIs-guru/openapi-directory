import { SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayAttachmentResourceTypeEnum } from "./transitgatewayattachmentresourcetypeenum";
import { TransitGatewayAssociationStateEnum } from "./transitgatewayassociationstateenum";
/**
 * Describes an association between a resource attachment and a transit gateway route table.
**/
export declare class TransitGatewayAssociation extends SpeakeasyBase {
    resourceId?: string;
    resourceType?: TransitGatewayAttachmentResourceTypeEnum;
    state?: TransitGatewayAssociationStateEnum;
    transitGatewayAttachmentId?: string;
    transitGatewayRouteTableId?: string;
}
