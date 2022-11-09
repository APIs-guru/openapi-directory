import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateAppCookieStickinessPolicyActionEnum {
    CreateAppCookieStickinessPolicy = "CreateAppCookieStickinessPolicy"
}
export declare enum PostCreateAppCookieStickinessPolicyVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class PostCreateAppCookieStickinessPolicyQueryParams extends SpeakeasyBase {
    action: PostCreateAppCookieStickinessPolicyActionEnum;
    version: PostCreateAppCookieStickinessPolicyVersionEnum;
}
export declare class PostCreateAppCookieStickinessPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateAppCookieStickinessPolicyRequest extends SpeakeasyBase {
    queryParams: PostCreateAppCookieStickinessPolicyQueryParams;
    headers: PostCreateAppCookieStickinessPolicyHeaders;
    request?: Uint8Array;
}
export declare class PostCreateAppCookieStickinessPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
