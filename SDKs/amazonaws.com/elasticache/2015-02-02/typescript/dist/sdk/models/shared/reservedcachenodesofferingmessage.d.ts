import { SpeakeasyBase } from "../../../internal/utils";
import { ReservedCacheNodesOffering } from "./reservedcachenodesoffering";
/**
 * Represents the output of a <code>DescribeReservedCacheNodesOfferings</code> operation.
**/
export declare class ReservedCacheNodesOfferingMessage extends SpeakeasyBase {
    marker?: string;
    reservedCacheNodesOfferings?: ReservedCacheNodesOffering[];
}
