import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteOpenIdConnectProviderActionEnum {
    DeleteOpenIdConnectProvider = "DeleteOpenIDConnectProvider"
}
export declare enum GetDeleteOpenIdConnectProviderVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetDeleteOpenIdConnectProviderQueryParams extends SpeakeasyBase {
    action: GetDeleteOpenIdConnectProviderActionEnum;
    openIdConnectProviderArn: string;
    version: GetDeleteOpenIdConnectProviderVersionEnum;
}
export declare class GetDeleteOpenIdConnectProviderHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteOpenIdConnectProviderRequest extends SpeakeasyBase {
    queryParams: GetDeleteOpenIdConnectProviderQueryParams;
    headers: GetDeleteOpenIdConnectProviderHeaders;
}
export declare class GetDeleteOpenIdConnectProviderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
