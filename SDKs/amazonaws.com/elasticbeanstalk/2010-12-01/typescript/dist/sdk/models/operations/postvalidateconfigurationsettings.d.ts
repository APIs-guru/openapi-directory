import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostValidateConfigurationSettingsActionEnum {
    ValidateConfigurationSettings = "ValidateConfigurationSettings"
}
export declare enum PostValidateConfigurationSettingsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostValidateConfigurationSettingsQueryParams extends SpeakeasyBase {
    action: PostValidateConfigurationSettingsActionEnum;
    version: PostValidateConfigurationSettingsVersionEnum;
}
export declare class PostValidateConfigurationSettingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostValidateConfigurationSettingsRequest extends SpeakeasyBase {
    queryParams: PostValidateConfigurationSettingsQueryParams;
    headers: PostValidateConfigurationSettingsHeaders;
    request?: Uint8Array;
}
export declare class PostValidateConfigurationSettingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
