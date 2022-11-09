import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetUpdateOpenIdConnectProviderThumbprintActionEnum {
    UpdateOpenIdConnectProviderThumbprint = "UpdateOpenIDConnectProviderThumbprint"
}
export declare enum GetUpdateOpenIdConnectProviderThumbprintVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetUpdateOpenIdConnectProviderThumbprintQueryParams extends SpeakeasyBase {
    action: GetUpdateOpenIdConnectProviderThumbprintActionEnum;
    openIdConnectProviderArn: string;
    thumbprintList: string[];
    version: GetUpdateOpenIdConnectProviderThumbprintVersionEnum;
}
export declare class GetUpdateOpenIdConnectProviderThumbprintHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUpdateOpenIdConnectProviderThumbprintRequest extends SpeakeasyBase {
    queryParams: GetUpdateOpenIdConnectProviderThumbprintQueryParams;
    headers: GetUpdateOpenIdConnectProviderThumbprintHeaders;
}
export declare class GetUpdateOpenIdConnectProviderThumbprintResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
