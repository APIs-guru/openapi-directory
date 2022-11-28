import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReservedCacheNodesOffering } from "./reservedcachenodesoffering";



// ReservedCacheNodesOfferingMessage
/** 
 * Represents the output of a <code>DescribeReservedCacheNodesOfferings</code> operation.
**/
export class ReservedCacheNodesOfferingMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: ReservedCacheNodesOffering })
  reservedCacheNodesOfferings?: ReservedCacheNodesOffering[];
}
