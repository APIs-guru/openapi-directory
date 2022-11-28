import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * Describes an association between a local gateway route table and a virtual interface group.
**/
export declare class LocalGatewayRouteTableVirtualInterfaceGroupAssociation extends SpeakeasyBase {
    localGatewayId?: string;
    localGatewayRouteTableArn?: string;
    localGatewayRouteTableId?: string;
    localGatewayRouteTableVirtualInterfaceGroupAssociationId?: string;
    localGatewayVirtualInterfaceGroupId?: string;
    ownerId?: string;
    state?: string;
    tags?: Tag[];
}
