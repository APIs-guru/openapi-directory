import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostUpdateOpenIdConnectProviderThumbprintActionEnum {
    UpdateOpenIdConnectProviderThumbprint = "UpdateOpenIDConnectProviderThumbprint"
}
export declare enum PostUpdateOpenIdConnectProviderThumbprintVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostUpdateOpenIdConnectProviderThumbprintQueryParams extends SpeakeasyBase {
    action: PostUpdateOpenIdConnectProviderThumbprintActionEnum;
    version: PostUpdateOpenIdConnectProviderThumbprintVersionEnum;
}
export declare class PostUpdateOpenIdConnectProviderThumbprintHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUpdateOpenIdConnectProviderThumbprintRequest extends SpeakeasyBase {
    queryParams: PostUpdateOpenIdConnectProviderThumbprintQueryParams;
    headers: PostUpdateOpenIdConnectProviderThumbprintHeaders;
    request?: Uint8Array;
}
export declare class PostUpdateOpenIdConnectProviderThumbprintResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
