import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum EnableStageTransitionXAmzTargetEnum {
    CodePipeline20150709EnableStageTransition = "CodePipeline_20150709.EnableStageTransition"
}
export declare class EnableStageTransitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: EnableStageTransitionXAmzTargetEnum;
}
export declare class EnableStageTransitionRequest extends SpeakeasyBase {
    headers: EnableStageTransitionHeaders;
    request: shared.EnableStageTransitionInput;
}
export declare class EnableStageTransitionResponse extends SpeakeasyBase {
    contentType: string;
    pipelineNotFoundException?: any;
    stageNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
