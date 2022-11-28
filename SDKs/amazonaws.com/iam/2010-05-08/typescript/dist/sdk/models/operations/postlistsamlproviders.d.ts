import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostListSamlProvidersActionEnum {
    ListSamlProviders = "ListSAMLProviders"
}
export declare enum PostListSamlProvidersVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostListSamlProvidersQueryParams extends SpeakeasyBase {
    action: PostListSamlProvidersActionEnum;
    version: PostListSamlProvidersVersionEnum;
}
export declare class PostListSamlProvidersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListSamlProvidersRequest extends SpeakeasyBase {
    queryParams: PostListSamlProvidersQueryParams;
    headers: PostListSamlProvidersHeaders;
    request?: Uint8Array;
}
export declare class PostListSamlProvidersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
