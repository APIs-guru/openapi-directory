import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetListIdentityPoliciesActionEnum {
    ListIdentityPolicies = "ListIdentityPolicies"
}
export declare enum GetListIdentityPoliciesVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetListIdentityPoliciesQueryParams extends SpeakeasyBase {
    action: GetListIdentityPoliciesActionEnum;
    identity: string;
    version: GetListIdentityPoliciesVersionEnum;
}
export declare class GetListIdentityPoliciesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListIdentityPoliciesRequest extends SpeakeasyBase {
    queryParams: GetListIdentityPoliciesQueryParams;
    headers: GetListIdentityPoliciesHeaders;
}
export declare class GetListIdentityPoliciesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
