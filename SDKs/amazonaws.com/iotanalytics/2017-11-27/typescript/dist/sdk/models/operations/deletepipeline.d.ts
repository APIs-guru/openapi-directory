import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeletePipelinePathParams extends SpeakeasyBase {
    pipelineName: string;
}
export declare class DeletePipelineHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeletePipelineRequest extends SpeakeasyBase {
    pathParams: DeletePipelinePathParams;
    headers: DeletePipelineHeaders;
}
export declare class DeletePipelineResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
