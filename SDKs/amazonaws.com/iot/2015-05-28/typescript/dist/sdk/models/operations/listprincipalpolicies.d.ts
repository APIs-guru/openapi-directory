import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListPrincipalPoliciesQueryParams extends SpeakeasyBase {
    isAscendingOrder?: boolean;
    marker?: string;
    pageSize?: number;
}
export declare class ListPrincipalPoliciesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmznIotPrincipal: string;
}
export declare class ListPrincipalPoliciesRequest extends SpeakeasyBase {
    queryParams: ListPrincipalPoliciesQueryParams;
    headers: ListPrincipalPoliciesHeaders;
}
export declare class ListPrincipalPoliciesResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listPrincipalPoliciesResponse?: shared.ListPrincipalPoliciesResponse;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
