import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SageMakerPipelineParameter } from "./sagemakerpipelineparameter";


// SageMakerPipelineParameters
/** 
 * These are custom parameters to use when the target is a SageMaker Model Building Pipeline that starts based on EventBridge events.
**/
export class SageMakerPipelineParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=PipelineParameterList", elemType: shared.SageMakerPipelineParameter })
  pipelineParameterList?: SageMakerPipelineParameter[];
}
