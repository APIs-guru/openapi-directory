import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProcessorParameterNameEnum } from "./processorparameternameenum";



// ProcessorParameter
/** 
 * Describes the processor parameter.
**/
export class ProcessorParameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ParameterName" })
  parameterName: ProcessorParameterNameEnum;

  @SpeakeasyMetadata({ data: "json, name=ParameterValue" })
  parameterValue: string;
}
