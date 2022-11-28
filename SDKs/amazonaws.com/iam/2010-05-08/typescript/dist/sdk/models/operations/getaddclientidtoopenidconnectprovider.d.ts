import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetAddClientIdToOpenIdConnectProviderActionEnum {
    AddClientIdToOpenIdConnectProvider = "AddClientIDToOpenIDConnectProvider"
}
export declare enum GetAddClientIdToOpenIdConnectProviderVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetAddClientIdToOpenIdConnectProviderQueryParams extends SpeakeasyBase {
    action: GetAddClientIdToOpenIdConnectProviderActionEnum;
    clientId: string;
    openIdConnectProviderArn: string;
    version: GetAddClientIdToOpenIdConnectProviderVersionEnum;
}
export declare class GetAddClientIdToOpenIdConnectProviderHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAddClientIdToOpenIdConnectProviderRequest extends SpeakeasyBase {
    queryParams: GetAddClientIdToOpenIdConnectProviderQueryParams;
    headers: GetAddClientIdToOpenIdConnectProviderHeaders;
}
export declare class GetAddClientIdToOpenIdConnectProviderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
