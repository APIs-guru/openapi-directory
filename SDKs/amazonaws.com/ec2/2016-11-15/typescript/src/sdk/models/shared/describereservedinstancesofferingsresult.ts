import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReservedInstancesOffering } from "./reservedinstancesoffering";



// DescribeReservedInstancesOfferingsResult
/** 
 * Contains the output of DescribeReservedInstancesOfferings.
**/
export class DescribeReservedInstancesOfferingsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: ReservedInstancesOffering })
  reservedInstancesOfferings?: ReservedInstancesOffering[];
}
