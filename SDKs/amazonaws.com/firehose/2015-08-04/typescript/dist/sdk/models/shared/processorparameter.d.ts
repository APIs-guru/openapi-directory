import { SpeakeasyBase } from "../../../internal/utils";
import { ProcessorParameterNameEnum } from "./processorparameternameenum";
/**
 * Describes the processor parameter.
**/
export declare class ProcessorParameter extends SpeakeasyBase {
    parameterName: ProcessorParameterNameEnum;
    parameterValue: string;
}
