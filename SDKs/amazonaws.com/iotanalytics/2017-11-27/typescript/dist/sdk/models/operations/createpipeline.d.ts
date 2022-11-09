import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreatePipelineHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreatePipelineRequestBody extends SpeakeasyBase {
    pipelineActivities: shared.PipelineActivity[];
    pipelineName: string;
    tags?: shared.Tag[];
}
export declare class CreatePipelineRequest extends SpeakeasyBase {
    headers: CreatePipelineHeaders;
    request: CreatePipelineRequestBody;
}
export declare class CreatePipelineResponse extends SpeakeasyBase {
    contentType: string;
    createPipelineResponse?: shared.CreatePipelineResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
