import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListTargetsForPolicyPathParams extends SpeakeasyBase {
    policyName: string;
}
export declare class ListTargetsForPolicyQueryParams extends SpeakeasyBase {
    marker?: string;
    pageSize?: number;
}
export declare class ListTargetsForPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListTargetsForPolicyRequest extends SpeakeasyBase {
    pathParams: ListTargetsForPolicyPathParams;
    queryParams: ListTargetsForPolicyQueryParams;
    headers: ListTargetsForPolicyHeaders;
}
export declare class ListTargetsForPolicyResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    listTargetsForPolicyResponse?: shared.ListTargetsForPolicyResponse;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
