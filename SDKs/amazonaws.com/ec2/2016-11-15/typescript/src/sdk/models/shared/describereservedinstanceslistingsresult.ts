import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReservedInstancesListing } from "./reservedinstanceslisting";



// DescribeReservedInstancesListingsResult
/** 
 * Contains the output of DescribeReservedInstancesListings.
**/
export class DescribeReservedInstancesListingsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ReservedInstancesListing })
  reservedInstancesListings?: ReservedInstancesListing[];
}
