import { SpeakeasyBase } from "../../../internal/utils";
import { PoolCidrBlock } from "./poolcidrblock";
import { Tag } from "./tag";
/**
 * Describes an IPv6 address pool.
**/
export declare class Ipv6Pool extends SpeakeasyBase {
    description?: string;
    poolCidrBlocks?: PoolCidrBlock[];
    poolId?: string;
    tags?: Tag[];
}
