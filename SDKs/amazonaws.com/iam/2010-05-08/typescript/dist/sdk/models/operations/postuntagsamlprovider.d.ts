import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostUntagSamlProviderActionEnum {
    UntagSamlProvider = "UntagSAMLProvider"
}
export declare enum PostUntagSamlProviderVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostUntagSamlProviderQueryParams extends SpeakeasyBase {
    action: PostUntagSamlProviderActionEnum;
    version: PostUntagSamlProviderVersionEnum;
}
export declare class PostUntagSamlProviderHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUntagSamlProviderRequest extends SpeakeasyBase {
    queryParams: PostUntagSamlProviderQueryParams;
    headers: PostUntagSamlProviderHeaders;
    request?: Uint8Array;
}
export declare class PostUntagSamlProviderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
