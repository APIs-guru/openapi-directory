import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReservedInstancesModification } from "./reservedinstancesmodification";



// DescribeReservedInstancesModificationsResult
/** 
 * Contains the output of DescribeReservedInstancesModifications.
**/
export class DescribeReservedInstancesModificationsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: ReservedInstancesModification })
  reservedInstancesModifications?: ReservedInstancesModification[];
}
