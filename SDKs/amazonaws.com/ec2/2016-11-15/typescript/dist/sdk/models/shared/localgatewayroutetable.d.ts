import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * Describes a local gateway route table.
**/
export declare class LocalGatewayRouteTable extends SpeakeasyBase {
    localGatewayId?: string;
    localGatewayRouteTableArn?: string;
    localGatewayRouteTableId?: string;
    outpostArn?: string;
    ownerId?: string;
    state?: string;
    tags?: Tag[];
}
