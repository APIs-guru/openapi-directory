import { SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayRouteTableStateEnum } from "./transitgatewayroutetablestateenum";
import { Tag } from "./tag";
/**
 * Describes a transit gateway route table.
**/
export declare class TransitGatewayRouteTable extends SpeakeasyBase {
    creationTime?: Date;
    defaultAssociationRouteTable?: boolean;
    defaultPropagationRouteTable?: boolean;
    state?: TransitGatewayRouteTableStateEnum;
    tags?: Tag[];
    transitGatewayId?: string;
    transitGatewayRouteTableId?: string;
}
