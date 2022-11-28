import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostUpdateServiceAccessPoliciesActionEnum {
    UpdateServiceAccessPolicies = "UpdateServiceAccessPolicies"
}
export declare enum PostUpdateServiceAccessPoliciesVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class PostUpdateServiceAccessPoliciesQueryParams extends SpeakeasyBase {
    action: PostUpdateServiceAccessPoliciesActionEnum;
    version: PostUpdateServiceAccessPoliciesVersionEnum;
}
export declare class PostUpdateServiceAccessPoliciesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUpdateServiceAccessPoliciesRequest extends SpeakeasyBase {
    queryParams: PostUpdateServiceAccessPoliciesQueryParams;
    headers: PostUpdateServiceAccessPoliciesHeaders;
    request?: Uint8Array;
}
export declare class PostUpdateServiceAccessPoliciesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
