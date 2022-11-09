import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostTagOpenIdConnectProviderActionEnum {
    TagOpenIdConnectProvider = "TagOpenIDConnectProvider"
}
export declare enum PostTagOpenIdConnectProviderVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostTagOpenIdConnectProviderQueryParams extends SpeakeasyBase {
    action: PostTagOpenIdConnectProviderActionEnum;
    version: PostTagOpenIdConnectProviderVersionEnum;
}
export declare class PostTagOpenIdConnectProviderHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostTagOpenIdConnectProviderRequest extends SpeakeasyBase {
    queryParams: PostTagOpenIdConnectProviderQueryParams;
    headers: PostTagOpenIdConnectProviderHeaders;
    request?: Uint8Array;
}
export declare class PostTagOpenIdConnectProviderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
