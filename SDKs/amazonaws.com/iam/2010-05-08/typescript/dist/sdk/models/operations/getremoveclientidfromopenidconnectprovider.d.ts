import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetRemoveClientIdFromOpenIdConnectProviderActionEnum {
    RemoveClientIdFromOpenIdConnectProvider = "RemoveClientIDFromOpenIDConnectProvider"
}
export declare enum GetRemoveClientIdFromOpenIdConnectProviderVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetRemoveClientIdFromOpenIdConnectProviderQueryParams extends SpeakeasyBase {
    action: GetRemoveClientIdFromOpenIdConnectProviderActionEnum;
    clientId: string;
    openIdConnectProviderArn: string;
    version: GetRemoveClientIdFromOpenIdConnectProviderVersionEnum;
}
export declare class GetRemoveClientIdFromOpenIdConnectProviderHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRemoveClientIdFromOpenIdConnectProviderRequest extends SpeakeasyBase {
    queryParams: GetRemoveClientIdFromOpenIdConnectProviderQueryParams;
    headers: GetRemoveClientIdFromOpenIdConnectProviderHeaders;
}
export declare class GetRemoveClientIdFromOpenIdConnectProviderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
