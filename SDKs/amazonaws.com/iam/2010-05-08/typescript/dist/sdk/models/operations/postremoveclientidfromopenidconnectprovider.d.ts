import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostRemoveClientIdFromOpenIdConnectProviderActionEnum {
    RemoveClientIdFromOpenIdConnectProvider = "RemoveClientIDFromOpenIDConnectProvider"
}
export declare enum PostRemoveClientIdFromOpenIdConnectProviderVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostRemoveClientIdFromOpenIdConnectProviderQueryParams extends SpeakeasyBase {
    action: PostRemoveClientIdFromOpenIdConnectProviderActionEnum;
    version: PostRemoveClientIdFromOpenIdConnectProviderVersionEnum;
}
export declare class PostRemoveClientIdFromOpenIdConnectProviderHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRemoveClientIdFromOpenIdConnectProviderRequest extends SpeakeasyBase {
    queryParams: PostRemoveClientIdFromOpenIdConnectProviderQueryParams;
    headers: PostRemoveClientIdFromOpenIdConnectProviderHeaders;
    request?: Uint8Array;
}
export declare class PostRemoveClientIdFromOpenIdConnectProviderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
