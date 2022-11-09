import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetUntagOpenIdConnectProviderActionEnum {
    UntagOpenIdConnectProvider = "UntagOpenIDConnectProvider"
}
export declare enum GetUntagOpenIdConnectProviderVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetUntagOpenIdConnectProviderQueryParams extends SpeakeasyBase {
    action: GetUntagOpenIdConnectProviderActionEnum;
    openIdConnectProviderArn: string;
    tagKeys: string[];
    version: GetUntagOpenIdConnectProviderVersionEnum;
}
export declare class GetUntagOpenIdConnectProviderHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUntagOpenIdConnectProviderRequest extends SpeakeasyBase {
    queryParams: GetUntagOpenIdConnectProviderQueryParams;
    headers: GetUntagOpenIdConnectProviderHeaders;
}
export declare class GetUntagOpenIdConnectProviderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
