import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostListOpenIdConnectProvidersActionEnum {
    ListOpenIdConnectProviders = "ListOpenIDConnectProviders"
}
export declare enum PostListOpenIdConnectProvidersVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostListOpenIdConnectProvidersQueryParams extends SpeakeasyBase {
    action: PostListOpenIdConnectProvidersActionEnum;
    version: PostListOpenIdConnectProvidersVersionEnum;
}
export declare class PostListOpenIdConnectProvidersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListOpenIdConnectProvidersRequest extends SpeakeasyBase {
    queryParams: PostListOpenIdConnectProvidersQueryParams;
    headers: PostListOpenIdConnectProvidersHeaders;
    request?: Uint8Array;
}
export declare class PostListOpenIdConnectProvidersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
