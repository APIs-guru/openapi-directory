import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostUpdateSamlProviderActionEnum {
    UpdateSamlProvider = "UpdateSAMLProvider"
}
export declare enum PostUpdateSamlProviderVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostUpdateSamlProviderQueryParams extends SpeakeasyBase {
    action: PostUpdateSamlProviderActionEnum;
    version: PostUpdateSamlProviderVersionEnum;
}
export declare class PostUpdateSamlProviderHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUpdateSamlProviderRequest extends SpeakeasyBase {
    queryParams: PostUpdateSamlProviderQueryParams;
    headers: PostUpdateSamlProviderHeaders;
    request?: Uint8Array;
}
export declare class PostUpdateSamlProviderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
