import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetListOpenIdConnectProvidersActionEnum {
    ListOpenIdConnectProviders = "ListOpenIDConnectProviders"
}
export declare enum GetListOpenIdConnectProvidersVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetListOpenIdConnectProvidersQueryParams extends SpeakeasyBase {
    action: GetListOpenIdConnectProvidersActionEnum;
    version: GetListOpenIdConnectProvidersVersionEnum;
}
export declare class GetListOpenIdConnectProvidersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListOpenIdConnectProvidersRequest extends SpeakeasyBase {
    queryParams: GetListOpenIdConnectProvidersQueryParams;
    headers: GetListOpenIdConnectProvidersHeaders;
}
export declare class GetListOpenIdConnectProvidersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
