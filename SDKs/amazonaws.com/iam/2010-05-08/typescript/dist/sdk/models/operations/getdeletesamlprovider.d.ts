import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteSamlProviderActionEnum {
    DeleteSamlProvider = "DeleteSAMLProvider"
}
export declare enum GetDeleteSamlProviderVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetDeleteSamlProviderQueryParams extends SpeakeasyBase {
    action: GetDeleteSamlProviderActionEnum;
    samlProviderArn: string;
    version: GetDeleteSamlProviderVersionEnum;
}
export declare class GetDeleteSamlProviderHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteSamlProviderRequest extends SpeakeasyBase {
    queryParams: GetDeleteSamlProviderQueryParams;
    headers: GetDeleteSamlProviderHeaders;
}
export declare class GetDeleteSamlProviderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
