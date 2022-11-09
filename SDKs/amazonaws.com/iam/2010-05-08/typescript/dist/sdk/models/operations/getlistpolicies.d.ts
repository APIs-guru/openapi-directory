import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetListPoliciesActionEnum {
    ListPolicies = "ListPolicies"
}
export declare enum GetListPoliciesPolicyUsageFilterEnum {
    PermissionsPolicy = "PermissionsPolicy",
    PermissionsBoundary = "PermissionsBoundary"
}
export declare enum GetListPoliciesScopeEnum {
    All = "All",
    Aws = "AWS",
    Local = "Local"
}
export declare enum GetListPoliciesVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetListPoliciesQueryParams extends SpeakeasyBase {
    action: GetListPoliciesActionEnum;
    marker?: string;
    maxItems?: number;
    onlyAttached?: boolean;
    pathPrefix?: string;
    policyUsageFilter?: GetListPoliciesPolicyUsageFilterEnum;
    scope?: GetListPoliciesScopeEnum;
    version: GetListPoliciesVersionEnum;
}
export declare class GetListPoliciesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListPoliciesRequest extends SpeakeasyBase {
    queryParams: GetListPoliciesQueryParams;
    headers: GetListPoliciesHeaders;
}
export declare class GetListPoliciesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
