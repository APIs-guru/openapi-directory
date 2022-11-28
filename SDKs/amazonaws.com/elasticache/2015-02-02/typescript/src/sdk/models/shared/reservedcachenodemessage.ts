import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReservedCacheNode } from "./reservedcachenode";



// ReservedCacheNodeMessage
/** 
 * Represents the output of a <code>DescribeReservedCacheNodes</code> operation.
**/
export class ReservedCacheNodeMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: ReservedCacheNode })
  reservedCacheNodes?: ReservedCacheNode[];
}
