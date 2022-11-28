import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetListSamlProviderTagsActionEnum {
    ListSamlProviderTags = "ListSAMLProviderTags"
}
export declare enum GetListSamlProviderTagsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetListSamlProviderTagsQueryParams extends SpeakeasyBase {
    action: GetListSamlProviderTagsActionEnum;
    marker?: string;
    maxItems?: number;
    samlProviderArn: string;
    version: GetListSamlProviderTagsVersionEnum;
}
export declare class GetListSamlProviderTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListSamlProviderTagsRequest extends SpeakeasyBase {
    queryParams: GetListSamlProviderTagsQueryParams;
    headers: GetListSamlProviderTagsHeaders;
}
export declare class GetListSamlProviderTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
