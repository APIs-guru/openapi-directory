import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetPipelineXAmzTargetEnum {
    CodePipeline20150709GetPipeline = "CodePipeline_20150709.GetPipeline"
}
export declare class GetPipelineHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetPipelineXAmzTargetEnum;
}
export declare class GetPipelineRequest extends SpeakeasyBase {
    headers: GetPipelineHeaders;
    request: shared.GetPipelineInput;
}
export declare class GetPipelineResponse extends SpeakeasyBase {
    contentType: string;
    getPipelineOutput?: shared.GetPipelineOutput;
    pipelineNotFoundException?: any;
    pipelineVersionNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
