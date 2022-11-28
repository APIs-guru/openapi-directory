import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostGetSamlProviderActionEnum {
    GetSamlProvider = "GetSAMLProvider"
}
export declare enum PostGetSamlProviderVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostGetSamlProviderQueryParams extends SpeakeasyBase {
    action: PostGetSamlProviderActionEnum;
    version: PostGetSamlProviderVersionEnum;
}
export declare class PostGetSamlProviderHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetSamlProviderRequest extends SpeakeasyBase {
    queryParams: PostGetSamlProviderQueryParams;
    headers: PostGetSamlProviderHeaders;
    request?: Uint8Array;
}
export declare class PostGetSamlProviderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
