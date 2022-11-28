import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReservedInstances } from "./reservedinstances";



// DescribeReservedInstancesResult
/** 
 * Contains the output for DescribeReservedInstances.
**/
export class DescribeReservedInstancesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ReservedInstances })
  reservedInstances?: ReservedInstances[];
}
