import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetListSamlProvidersActionEnum {
    ListSamlProviders = "ListSAMLProviders"
}
export declare enum GetListSamlProvidersVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetListSamlProvidersQueryParams extends SpeakeasyBase {
    action: GetListSamlProvidersActionEnum;
    version: GetListSamlProvidersVersionEnum;
}
export declare class GetListSamlProvidersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListSamlProvidersRequest extends SpeakeasyBase {
    queryParams: GetListSamlProvidersQueryParams;
    headers: GetListSamlProvidersHeaders;
}
export declare class GetListSamlProvidersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
