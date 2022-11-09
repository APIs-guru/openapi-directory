import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StartPipelineReprocessingPathParams extends SpeakeasyBase {
    pipelineName: string;
}
export declare class StartPipelineReprocessingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies one or more sets of channel messages.
**/
export declare class StartPipelineReprocessingRequestBodyChannelMessages extends SpeakeasyBase {
    s3Paths?: string[];
}
export declare class StartPipelineReprocessingRequestBody extends SpeakeasyBase {
    channelMessages?: StartPipelineReprocessingRequestBodyChannelMessages;
    endTime?: Date;
    startTime?: Date;
}
export declare class StartPipelineReprocessingRequest extends SpeakeasyBase {
    pathParams: StartPipelineReprocessingPathParams;
    headers: StartPipelineReprocessingHeaders;
    request: StartPipelineReprocessingRequestBody;
}
export declare class StartPipelineReprocessingResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceAlreadyExistsException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    startPipelineReprocessingResponse?: shared.StartPipelineReprocessingResponse;
    statusCode: number;
    throttlingException?: any;
}
