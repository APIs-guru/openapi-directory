import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProcessorParameterNameEnum } from "./processorparameternameenum";


// ProcessorParameter
/** 
 * Describes the processor parameter.
**/
export class ProcessorParameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=ParameterName" })
  parameterName: ProcessorParameterNameEnum;

  @Metadata({ data: "json, name=ParameterValue" })
  parameterValue: string;
}
