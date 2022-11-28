import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteSamlProviderActionEnum {
    DeleteSamlProvider = "DeleteSAMLProvider"
}
export declare enum PostDeleteSamlProviderVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostDeleteSamlProviderQueryParams extends SpeakeasyBase {
    action: PostDeleteSamlProviderActionEnum;
    version: PostDeleteSamlProviderVersionEnum;
}
export declare class PostDeleteSamlProviderHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteSamlProviderRequest extends SpeakeasyBase {
    queryParams: PostDeleteSamlProviderQueryParams;
    headers: PostDeleteSamlProviderHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteSamlProviderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
