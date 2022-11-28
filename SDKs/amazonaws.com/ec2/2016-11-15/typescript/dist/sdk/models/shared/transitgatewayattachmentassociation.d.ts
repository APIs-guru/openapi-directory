import { SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayAssociationStateEnum } from "./transitgatewayassociationstateenum";
/**
 * Describes an association.
**/
export declare class TransitGatewayAttachmentAssociation extends SpeakeasyBase {
    state?: TransitGatewayAssociationStateEnum;
    transitGatewayRouteTableId?: string;
}
