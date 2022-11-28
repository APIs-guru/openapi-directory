import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReservedInstancesListing } from "./reservedinstanceslisting";



// CancelReservedInstancesListingResult
/** 
 * Contains the output of CancelReservedInstancesListing.
**/
export class CancelReservedInstancesListingResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ReservedInstancesListing })
  reservedInstancesListings?: ReservedInstancesListing[];
}
