import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetListOpenIdConnectProviderTagsActionEnum {
    ListOpenIdConnectProviderTags = "ListOpenIDConnectProviderTags"
}
export declare enum GetListOpenIdConnectProviderTagsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetListOpenIdConnectProviderTagsQueryParams extends SpeakeasyBase {
    action: GetListOpenIdConnectProviderTagsActionEnum;
    marker?: string;
    maxItems?: number;
    openIdConnectProviderArn: string;
    version: GetListOpenIdConnectProviderTagsVersionEnum;
}
export declare class GetListOpenIdConnectProviderTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListOpenIdConnectProviderTagsRequest extends SpeakeasyBase {
    queryParams: GetListOpenIdConnectProviderTagsQueryParams;
    headers: GetListOpenIdConnectProviderTagsHeaders;
}
export declare class GetListOpenIdConnectProviderTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
