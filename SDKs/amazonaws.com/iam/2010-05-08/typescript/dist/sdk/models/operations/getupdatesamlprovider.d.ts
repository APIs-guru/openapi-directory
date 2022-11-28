import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetUpdateSamlProviderActionEnum {
    UpdateSamlProvider = "UpdateSAMLProvider"
}
export declare enum GetUpdateSamlProviderVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetUpdateSamlProviderQueryParams extends SpeakeasyBase {
    action: GetUpdateSamlProviderActionEnum;
    samlMetadataDocument: string;
    samlProviderArn: string;
    version: GetUpdateSamlProviderVersionEnum;
}
export declare class GetUpdateSamlProviderHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUpdateSamlProviderRequest extends SpeakeasyBase {
    queryParams: GetUpdateSamlProviderQueryParams;
    headers: GetUpdateSamlProviderHeaders;
}
export declare class GetUpdateSamlProviderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
