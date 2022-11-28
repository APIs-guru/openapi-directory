import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecurringCharge } from "./recurringcharge";



// ReservedCacheNodesOffering
/** 
 * Describes all of the attributes of a reserved cache node offering.
**/
export class ReservedCacheNodesOffering extends SpeakeasyBase {
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
  reservedCacheNodesOfferingId?: string;

  @SpeakeasyMetadata()
  usagePrice?: number;
}
