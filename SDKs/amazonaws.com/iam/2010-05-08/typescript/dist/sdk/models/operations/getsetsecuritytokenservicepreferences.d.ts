import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetSetSecurityTokenServicePreferencesActionEnum {
    SetSecurityTokenServicePreferences = "SetSecurityTokenServicePreferences"
}
export declare enum GetSetSecurityTokenServicePreferencesGlobalEndpointTokenVersionEnum {
    V1Token = "v1Token",
    V2Token = "v2Token"
}
export declare enum GetSetSecurityTokenServicePreferencesVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetSetSecurityTokenServicePreferencesQueryParams extends SpeakeasyBase {
    action: GetSetSecurityTokenServicePreferencesActionEnum;
    globalEndpointTokenVersion: GetSetSecurityTokenServicePreferencesGlobalEndpointTokenVersionEnum;
    version: GetSetSecurityTokenServicePreferencesVersionEnum;
}
export declare class GetSetSecurityTokenServicePreferencesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSetSecurityTokenServicePreferencesRequest extends SpeakeasyBase {
    queryParams: GetSetSecurityTokenServicePreferencesQueryParams;
    headers: GetSetSecurityTokenServicePreferencesHeaders;
}
export declare class GetSetSecurityTokenServicePreferencesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
