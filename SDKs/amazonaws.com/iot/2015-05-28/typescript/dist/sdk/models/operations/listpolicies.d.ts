import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListPoliciesQueryParams extends SpeakeasyBase {
    isAscendingOrder?: boolean;
    marker?: string;
    pageSize?: number;
}
export declare class ListPoliciesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListPoliciesRequest extends SpeakeasyBase {
    queryParams: ListPoliciesQueryParams;
    headers: ListPoliciesHeaders;
}
export declare class ListPoliciesResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listPoliciesResponse?: shared.ListPoliciesResponse;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
