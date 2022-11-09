import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetUntagSamlProviderActionEnum {
    UntagSamlProvider = "UntagSAMLProvider"
}
export declare enum GetUntagSamlProviderVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetUntagSamlProviderQueryParams extends SpeakeasyBase {
    action: GetUntagSamlProviderActionEnum;
    samlProviderArn: string;
    tagKeys: string[];
    version: GetUntagSamlProviderVersionEnum;
}
export declare class GetUntagSamlProviderHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUntagSamlProviderRequest extends SpeakeasyBase {
    queryParams: GetUntagSamlProviderQueryParams;
    headers: GetUntagSamlProviderHeaders;
}
export declare class GetUntagSamlProviderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
