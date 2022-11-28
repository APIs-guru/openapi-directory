import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * Describes an association between a local gateway route table and a VPC.
**/
export declare class LocalGatewayRouteTableVpcAssociation extends SpeakeasyBase {
    localGatewayId?: string;
    localGatewayRouteTableArn?: string;
    localGatewayRouteTableId?: string;
    localGatewayRouteTableVpcAssociationId?: string;
    ownerId?: string;
    state?: string;
    tags?: Tag[];
    vpcId?: string;
}
