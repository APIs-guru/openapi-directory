import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetGetIdentityPoliciesActionEnum {
    GetIdentityPolicies = "GetIdentityPolicies"
}
export declare enum GetGetIdentityPoliciesVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetGetIdentityPoliciesQueryParams extends SpeakeasyBase {
    action: GetGetIdentityPoliciesActionEnum;
    identity: string;
    policyNames: string[];
    version: GetGetIdentityPoliciesVersionEnum;
}
export declare class GetGetIdentityPoliciesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetIdentityPoliciesRequest extends SpeakeasyBase {
    queryParams: GetGetIdentityPoliciesQueryParams;
    headers: GetGetIdentityPoliciesHeaders;
}
export declare class GetGetIdentityPoliciesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
