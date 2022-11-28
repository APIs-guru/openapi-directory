import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteJobPathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class DeleteJobQueryParams extends SpeakeasyBase {
    force?: boolean;
    namespaceId?: string;
}
export declare class DeleteJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteJobRequest extends SpeakeasyBase {
    pathParams: DeleteJobPathParams;
    queryParams: DeleteJobQueryParams;
    headers: DeleteJobHeaders;
}
export declare class DeleteJobResponse extends SpeakeasyBase {
    contentType: string;
    invalidRequestException?: any;
    invalidStateTransitionException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
