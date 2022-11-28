import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReservedInstancesListing } from "./reservedinstanceslisting";



// CreateReservedInstancesListingResult
/** 
 * Contains the output of CreateReservedInstancesListing.
**/
export class CreateReservedInstancesListingResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ReservedInstancesListing })
  reservedInstancesListings?: ReservedInstancesListing[];
}
