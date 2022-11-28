import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProcessorParameter } from "./processorparameter";
import { ProcessorTypeEnum } from "./processortypeenum";



// Processor
/** 
 * Describes a data processor.
**/
export class Processor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Parameters", elemType: ProcessorParameter })
  parameters?: ProcessorParameter[];

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: ProcessorTypeEnum;
}
