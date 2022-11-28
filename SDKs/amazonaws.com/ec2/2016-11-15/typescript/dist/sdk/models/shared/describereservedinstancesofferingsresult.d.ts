import { SpeakeasyBase } from "../../../internal/utils";
import { ReservedInstancesOffering } from "./reservedinstancesoffering";
/**
 * Contains the output of DescribeReservedInstancesOfferings.
**/
export declare class DescribeReservedInstancesOfferingsResult extends SpeakeasyBase {
    nextToken?: string;
    reservedInstancesOfferings?: ReservedInstancesOffering[];
}
