import { SpeakeasyBase } from "../../../internal/utils";
import { ArchitectureTypeEnum } from "./architecturetypeenum";
/**
 * Describes the processor used by the instance type.
**/
export declare class ProcessorInfo extends SpeakeasyBase {
    supportedArchitectures?: ArchitectureTypeEnum[];
    sustainedClockSpeedInGhz?: number;
}
