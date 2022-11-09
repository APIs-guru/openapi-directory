import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetUpdateConfigurationSetSendingEnabledActionEnum {
    UpdateConfigurationSetSendingEnabled = "UpdateConfigurationSetSendingEnabled"
}
export declare enum GetUpdateConfigurationSetSendingEnabledVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetUpdateConfigurationSetSendingEnabledQueryParams extends SpeakeasyBase {
    action: GetUpdateConfigurationSetSendingEnabledActionEnum;
    configurationSetName: string;
    enabled: boolean;
    version: GetUpdateConfigurationSetSendingEnabledVersionEnum;
}
export declare class GetUpdateConfigurationSetSendingEnabledHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUpdateConfigurationSetSendingEnabledRequest extends SpeakeasyBase {
    queryParams: GetUpdateConfigurationSetSendingEnabledQueryParams;
    headers: GetUpdateConfigurationSetSendingEnabledHeaders;
}
export declare class GetUpdateConfigurationSetSendingEnabledResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
