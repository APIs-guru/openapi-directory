import { SpeakeasyBase } from "../../../internal/utils";
import { ReservedCacheNode } from "./reservedcachenode";
/**
 * Represents the output of a <code>DescribeReservedCacheNodes</code> operation.
**/
export declare class ReservedCacheNodeMessage extends SpeakeasyBase {
    marker?: string;
    reservedCacheNodes?: ReservedCacheNode[];
}
