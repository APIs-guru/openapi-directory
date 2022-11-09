import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateLbCookieStickinessPolicyActionEnum {
    CreateLbCookieStickinessPolicy = "CreateLBCookieStickinessPolicy"
}
export declare enum PostCreateLbCookieStickinessPolicyVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class PostCreateLbCookieStickinessPolicyQueryParams extends SpeakeasyBase {
    action: PostCreateLbCookieStickinessPolicyActionEnum;
    version: PostCreateLbCookieStickinessPolicyVersionEnum;
}
export declare class PostCreateLbCookieStickinessPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateLbCookieStickinessPolicyRequest extends SpeakeasyBase {
    queryParams: PostCreateLbCookieStickinessPolicyQueryParams;
    headers: PostCreateLbCookieStickinessPolicyHeaders;
    request?: Uint8Array;
}
export declare class PostCreateLbCookieStickinessPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
