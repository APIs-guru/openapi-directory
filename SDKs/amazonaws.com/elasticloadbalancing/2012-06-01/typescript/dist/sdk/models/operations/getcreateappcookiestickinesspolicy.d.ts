import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetCreateAppCookieStickinessPolicyActionEnum {
    CreateAppCookieStickinessPolicy = "CreateAppCookieStickinessPolicy"
}
export declare enum GetCreateAppCookieStickinessPolicyVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class GetCreateAppCookieStickinessPolicyQueryParams extends SpeakeasyBase {
    action: GetCreateAppCookieStickinessPolicyActionEnum;
    cookieName: string;
    loadBalancerName: string;
    policyName: string;
    version: GetCreateAppCookieStickinessPolicyVersionEnum;
}
export declare class GetCreateAppCookieStickinessPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCreateAppCookieStickinessPolicyRequest extends SpeakeasyBase {
    queryParams: GetCreateAppCookieStickinessPolicyQueryParams;
    headers: GetCreateAppCookieStickinessPolicyHeaders;
}
export declare class GetCreateAppCookieStickinessPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
