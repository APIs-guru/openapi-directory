import { SpeakeasyBase } from "../../../internal/utils";
import { SageMakerPipelineParameter } from "./sagemakerpipelineparameter";
/**
 * These are custom parameters to use when the target is a SageMaker Model Building Pipeline that starts based on EventBridge events.
**/
export declare class SageMakerPipelineParameters extends SpeakeasyBase {
    pipelineParameterList?: SageMakerPipelineParameter[];
}
