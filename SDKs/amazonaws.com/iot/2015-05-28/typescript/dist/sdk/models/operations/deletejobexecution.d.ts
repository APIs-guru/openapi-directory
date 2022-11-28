import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteJobExecutionPathParams extends SpeakeasyBase {
    executionNumber: number;
    jobId: string;
    thingName: string;
}
export declare class DeleteJobExecutionQueryParams extends SpeakeasyBase {
    force?: boolean;
    namespaceId?: string;
}
export declare class DeleteJobExecutionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteJobExecutionRequest extends SpeakeasyBase {
    pathParams: DeleteJobExecutionPathParams;
    queryParams: DeleteJobExecutionQueryParams;
    headers: DeleteJobExecutionHeaders;
}
export declare class DeleteJobExecutionResponse extends SpeakeasyBase {
    contentType: string;
    invalidRequestException?: any;
    invalidStateTransitionException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
