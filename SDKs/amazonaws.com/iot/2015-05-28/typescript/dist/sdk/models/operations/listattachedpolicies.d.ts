import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAttachedPoliciesPathParams extends SpeakeasyBase {
    target: string;
}
export declare class ListAttachedPoliciesQueryParams extends SpeakeasyBase {
    marker?: string;
    pageSize?: number;
    recursive?: boolean;
}
export declare class ListAttachedPoliciesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListAttachedPoliciesRequest extends SpeakeasyBase {
    pathParams: ListAttachedPoliciesPathParams;
    queryParams: ListAttachedPoliciesQueryParams;
    headers: ListAttachedPoliciesHeaders;
}
export declare class ListAttachedPoliciesResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    listAttachedPoliciesResponse?: shared.ListAttachedPoliciesResponse;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
