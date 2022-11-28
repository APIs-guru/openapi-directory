import { SpeakeasyBase } from "../../../internal/utils";
import { PublicIpv4PoolRange } from "./publicipv4poolrange";
import { Tag } from "./tag";
/**
 * Describes an IPv4 address pool.
**/
export declare class PublicIpv4Pool extends SpeakeasyBase {
    description?: string;
    networkBorderGroup?: string;
    poolAddressRanges?: PublicIpv4PoolRange[];
    poolId?: string;
    tags?: Tag[];
    totalAddressCount?: number;
    totalAvailableAddressCount?: number;
}
