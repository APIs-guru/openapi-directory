import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * Describes a customer-owned address pool.
**/
export declare class CoipPool extends SpeakeasyBase {
    localGatewayRouteTableId?: string;
    poolArn?: string;
    poolCidrs?: string[];
    poolId?: string;
    tags?: Tag[];
}
