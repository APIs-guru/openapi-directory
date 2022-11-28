import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the provisioned throughput settings for the table, consisting of read and write capacity units, along with data about increases and decreases.
**/
export declare class ProvisionedThroughputDescription extends SpeakeasyBase {
    lastDecreaseDateTime?: Date;
    lastIncreaseDateTime?: Date;
    numberOfDecreasesToday?: number;
    readCapacityUnits?: number;
    writeCapacityUnits?: number;
}
