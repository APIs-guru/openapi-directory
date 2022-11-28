import { SpeakeasyBase } from "../../../internal/utils";
import { ReservedInstancesModification } from "./reservedinstancesmodification";
/**
 * Contains the output of DescribeReservedInstancesModifications.
**/
export declare class DescribeReservedInstancesModificationsResult extends SpeakeasyBase {
    nextToken?: string;
    reservedInstancesModifications?: ReservedInstancesModification[];
}
