import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProvisionedThroughputDescription extends SpeakeasyBase {
    lastDecreaseDateTime?: Date;
    lastIncreaseDateTime?: Date;
    numberOfDecreasesToday?: number;
    readCapacityUnits?: number;
    writeCapacityUnits?: number;
}
