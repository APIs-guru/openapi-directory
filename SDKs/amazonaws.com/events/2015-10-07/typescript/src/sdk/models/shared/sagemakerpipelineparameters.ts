import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SageMakerPipelineParameter } from "./sagemakerpipelineparameter";



// SageMakerPipelineParameters
/** 
 * These are custom parameters to use when the target is a SageMaker Model Building Pipeline that starts based on EventBridge events.
**/
export class SageMakerPipelineParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PipelineParameterList", elemType: SageMakerPipelineParameter })
  pipelineParameterList?: SageMakerPipelineParameter[];
}
