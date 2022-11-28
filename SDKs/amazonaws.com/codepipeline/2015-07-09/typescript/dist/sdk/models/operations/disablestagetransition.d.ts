import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DisableStageTransitionXAmzTargetEnum {
    CodePipeline20150709DisableStageTransition = "CodePipeline_20150709.DisableStageTransition"
}
export declare class DisableStageTransitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisableStageTransitionXAmzTargetEnum;
}
export declare class DisableStageTransitionRequest extends SpeakeasyBase {
    headers: DisableStageTransitionHeaders;
    request: shared.DisableStageTransitionInput;
}
export declare class DisableStageTransitionResponse extends SpeakeasyBase {
    contentType: string;
    pipelineNotFoundException?: any;
    stageNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
