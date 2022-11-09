import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class CancelPipelineReprocessingPathParams extends SpeakeasyBase {
    pipelineName: string;
    reprocessingId: string;
}
export declare class CancelPipelineReprocessingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CancelPipelineReprocessingRequest extends SpeakeasyBase {
    pathParams: CancelPipelineReprocessingPathParams;
    headers: CancelPipelineReprocessingHeaders;
}
export declare class CancelPipelineReprocessingResponse extends SpeakeasyBase {
    cancelPipelineReprocessingResponse?: Map<string, any>;
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
