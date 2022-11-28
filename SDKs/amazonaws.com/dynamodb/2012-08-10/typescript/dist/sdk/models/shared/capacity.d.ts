import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the amount of provisioned throughput capacity consumed on a table or an index.
**/
export declare class Capacity extends SpeakeasyBase {
    capacityUnits?: number;
    readCapacityUnits?: number;
    writeCapacityUnits?: number;
}
