import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProcessorParameter } from "./processorparameter";
import { ProcessorTypeEnum } from "./processortypeenum";


// Processor
/** 
 * Describes a data processor.
**/
export class Processor extends SpeakeasyBase {
  @Metadata({ data: "json, name=Parameters", elemType: shared.ProcessorParameter })
  parameters?: ProcessorParameter[];

  @Metadata({ data: "json, name=Type" })
  type: ProcessorTypeEnum;
}
