import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostTagSamlProviderActionEnum {
    TagSamlProvider = "TagSAMLProvider"
}
export declare enum PostTagSamlProviderVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostTagSamlProviderQueryParams extends SpeakeasyBase {
    action: PostTagSamlProviderActionEnum;
    version: PostTagSamlProviderVersionEnum;
}
export declare class PostTagSamlProviderHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostTagSamlProviderRequest extends SpeakeasyBase {
    queryParams: PostTagSamlProviderQueryParams;
    headers: PostTagSamlProviderHeaders;
    request?: Uint8Array;
}
export declare class PostTagSamlProviderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
