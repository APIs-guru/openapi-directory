import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecurringCharge } from "./recurringcharge";



// ReservedCacheNode
/** 
 * Represents the output of a <code>PurchaseReservedCacheNodesOffering</code> operation.
**/
export class ReservedCacheNode extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cacheNodeCount?: number;

  @SpeakeasyMetadata()
  cacheNodeType?: string;

  @SpeakeasyMetadata()
  duration?: number;

  @SpeakeasyMetadata()
  fixedPrice?: number;

  @SpeakeasyMetadata()
  offeringType?: string;

  @SpeakeasyMetadata()
  productDescription?: string;

  @SpeakeasyMetadata({ elemType: RecurringCharge })
  recurringCharges?: RecurringCharge[];

  @SpeakeasyMetadata()
  reservationArn?: string;

  @SpeakeasyMetadata()
  reservedCacheNodeId?: string;

  @SpeakeasyMetadata()
  reservedCacheNodesOfferingId?: string;

  @SpeakeasyMetadata()
  startTime?: Date;

  @SpeakeasyMetadata()
  state?: string;

  @SpeakeasyMetadata()
  usagePrice?: number;
}
