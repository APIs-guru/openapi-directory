import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostGetIdentityPoliciesActionEnum {
    GetIdentityPolicies = "GetIdentityPolicies"
}
export declare enum PostGetIdentityPoliciesVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostGetIdentityPoliciesQueryParams extends SpeakeasyBase {
    action: PostGetIdentityPoliciesActionEnum;
    version: PostGetIdentityPoliciesVersionEnum;
}
export declare class PostGetIdentityPoliciesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetIdentityPoliciesRequest extends SpeakeasyBase {
    queryParams: PostGetIdentityPoliciesQueryParams;
    headers: PostGetIdentityPoliciesHeaders;
    request?: Uint8Array;
}
export declare class PostGetIdentityPoliciesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
