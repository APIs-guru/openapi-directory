import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdatePipelinePathParams extends SpeakeasyBase {
    pipelineName: string;
}
export declare class UpdatePipelineHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdatePipelineRequestBody extends SpeakeasyBase {
    pipelineActivities: shared.PipelineActivity[];
}
export declare class UpdatePipelineRequest extends SpeakeasyBase {
    pathParams: UpdatePipelinePathParams;
    headers: UpdatePipelineHeaders;
    request: UpdatePipelineRequestBody;
}
export declare class UpdatePipelineResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
