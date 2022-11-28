import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostAddClientIdToOpenIdConnectProviderActionEnum {
    AddClientIdToOpenIdConnectProvider = "AddClientIDToOpenIDConnectProvider"
}
export declare enum PostAddClientIdToOpenIdConnectProviderVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostAddClientIdToOpenIdConnectProviderQueryParams extends SpeakeasyBase {
    action: PostAddClientIdToOpenIdConnectProviderActionEnum;
    version: PostAddClientIdToOpenIdConnectProviderVersionEnum;
}
export declare class PostAddClientIdToOpenIdConnectProviderHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAddClientIdToOpenIdConnectProviderRequest extends SpeakeasyBase {
    queryParams: PostAddClientIdToOpenIdConnectProviderQueryParams;
    headers: PostAddClientIdToOpenIdConnectProviderHeaders;
    request?: Uint8Array;
}
export declare class PostAddClientIdToOpenIdConnectProviderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
