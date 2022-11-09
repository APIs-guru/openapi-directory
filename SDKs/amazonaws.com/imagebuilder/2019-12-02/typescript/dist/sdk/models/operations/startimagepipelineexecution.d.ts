import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StartImagePipelineExecutionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StartImagePipelineExecutionRequestBody extends SpeakeasyBase {
    clientToken: string;
    imagePipelineArn: string;
}
export declare class StartImagePipelineExecutionRequest extends SpeakeasyBase {
    headers: StartImagePipelineExecutionHeaders;
    request: StartImagePipelineExecutionRequestBody;
}
export declare class StartImagePipelineExecutionResponse extends SpeakeasyBase {
    callRateLimitExceededException?: any;
    clientException?: any;
    contentType: string;
    forbiddenException?: any;
    idempotentParameterMismatchException?: any;
    invalidRequestException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    serviceException?: any;
    serviceUnavailableException?: any;
    startImagePipelineExecutionResponse?: shared.StartImagePipelineExecutionResponse;
    statusCode: number;
}
