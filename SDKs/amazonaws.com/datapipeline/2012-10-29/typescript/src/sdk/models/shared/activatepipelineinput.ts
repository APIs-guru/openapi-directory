import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParameterValue } from "./parametervalue";



// ActivatePipelineInput
/** 
 * Contains the parameters for ActivatePipeline.
**/
export class ActivatePipelineInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parameterValues", elemType: ParameterValue })
  parameterValues?: ParameterValue[];

  @SpeakeasyMetadata({ data: "json, name=pipelineId" })
  pipelineId: string;

  @SpeakeasyMetadata({ data: "json, name=startTimestamp" })
  startTimestamp?: Date;
}
