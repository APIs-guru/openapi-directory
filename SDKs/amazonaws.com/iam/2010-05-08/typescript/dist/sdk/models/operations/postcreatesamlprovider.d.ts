import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateSamlProviderActionEnum {
    CreateSamlProvider = "CreateSAMLProvider"
}
export declare enum PostCreateSamlProviderVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostCreateSamlProviderQueryParams extends SpeakeasyBase {
    action: PostCreateSamlProviderActionEnum;
    version: PostCreateSamlProviderVersionEnum;
}
export declare class PostCreateSamlProviderHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateSamlProviderRequest extends SpeakeasyBase {
    queryParams: PostCreateSamlProviderQueryParams;
    headers: PostCreateSamlProviderHeaders;
    request?: Uint8Array;
}
export declare class PostCreateSamlProviderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
