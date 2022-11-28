import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListPoliciesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListPoliciesXAmzTargetEnum {
    Awsfms20180101ListPolicies = "AWSFMS_20180101.ListPolicies"
}
export declare class ListPoliciesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListPoliciesXAmzTargetEnum;
}
export declare class ListPoliciesRequest extends SpeakeasyBase {
    queryParams: ListPoliciesQueryParams;
    headers: ListPoliciesHeaders;
    request: shared.ListPoliciesRequest;
}
export declare class ListPoliciesResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidOperationException?: any;
    limitExceededException?: any;
    listPoliciesResponse?: shared.ListPoliciesResponse;
    resourceNotFoundException?: any;
    statusCode: number;
}
