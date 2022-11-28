import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetGetSamlProviderActionEnum {
    GetSamlProvider = "GetSAMLProvider"
}
export declare enum GetGetSamlProviderVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetGetSamlProviderQueryParams extends SpeakeasyBase {
    action: GetGetSamlProviderActionEnum;
    samlProviderArn: string;
    version: GetGetSamlProviderVersionEnum;
}
export declare class GetGetSamlProviderHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetSamlProviderRequest extends SpeakeasyBase {
    queryParams: GetGetSamlProviderQueryParams;
    headers: GetGetSamlProviderHeaders;
}
export declare class GetGetSamlProviderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
