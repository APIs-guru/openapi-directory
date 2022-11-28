import { SpeakeasyBase } from "../../../internal/utils";
import { ProcessorParameter } from "./processorparameter";
import { ProcessorTypeEnum } from "./processortypeenum";
/**
 * Describes a data processor.
**/
export declare class Processor extends SpeakeasyBase {
    parameters?: ProcessorParameter[];
    type: ProcessorTypeEnum;
}
