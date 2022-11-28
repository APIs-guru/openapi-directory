import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetCreateLbCookieStickinessPolicyActionEnum {
    CreateLbCookieStickinessPolicy = "CreateLBCookieStickinessPolicy"
}
export declare enum GetCreateLbCookieStickinessPolicyVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class GetCreateLbCookieStickinessPolicyQueryParams extends SpeakeasyBase {
    action: GetCreateLbCookieStickinessPolicyActionEnum;
    cookieExpirationPeriod?: number;
    loadBalancerName: string;
    policyName: string;
    version: GetCreateLbCookieStickinessPolicyVersionEnum;
}
export declare class GetCreateLbCookieStickinessPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCreateLbCookieStickinessPolicyRequest extends SpeakeasyBase {
    queryParams: GetCreateLbCookieStickinessPolicyQueryParams;
    headers: GetCreateLbCookieStickinessPolicyHeaders;
}
export declare class GetCreateLbCookieStickinessPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
