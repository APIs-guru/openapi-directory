import { SpeakeasyBase } from "../../../internal/utils";
export declare class CancelJobExecutionPathParams extends SpeakeasyBase {
    jobId: string;
    thingName: string;
}
export declare class CancelJobExecutionQueryParams extends SpeakeasyBase {
    force?: boolean;
}
export declare class CancelJobExecutionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CancelJobExecutionRequestBody extends SpeakeasyBase {
    expectedVersion?: number;
    statusDetails?: Map<string, string>;
}
export declare class CancelJobExecutionRequest extends SpeakeasyBase {
    pathParams: CancelJobExecutionPathParams;
    queryParams: CancelJobExecutionQueryParams;
    headers: CancelJobExecutionHeaders;
    request: CancelJobExecutionRequestBody;
}
export declare class CancelJobExecutionResponse extends SpeakeasyBase {
    contentType: string;
    invalidRequestException?: any;
    invalidStateTransitionException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    versionConflictException?: any;
}
