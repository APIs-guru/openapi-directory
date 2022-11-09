import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetGetOpenIdConnectProviderActionEnum {
    GetOpenIdConnectProvider = "GetOpenIDConnectProvider"
}
export declare enum GetGetOpenIdConnectProviderVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetGetOpenIdConnectProviderQueryParams extends SpeakeasyBase {
    action: GetGetOpenIdConnectProviderActionEnum;
    openIdConnectProviderArn: string;
    version: GetGetOpenIdConnectProviderVersionEnum;
}
export declare class GetGetOpenIdConnectProviderHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetOpenIdConnectProviderRequest extends SpeakeasyBase {
    queryParams: GetGetOpenIdConnectProviderQueryParams;
    headers: GetGetOpenIdConnectProviderHeaders;
}
export declare class GetGetOpenIdConnectProviderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
