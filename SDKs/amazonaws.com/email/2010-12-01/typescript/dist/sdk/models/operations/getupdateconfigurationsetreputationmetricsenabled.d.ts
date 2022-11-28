import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetUpdateConfigurationSetReputationMetricsEnabledActionEnum {
    UpdateConfigurationSetReputationMetricsEnabled = "UpdateConfigurationSetReputationMetricsEnabled"
}
export declare enum GetUpdateConfigurationSetReputationMetricsEnabledVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetUpdateConfigurationSetReputationMetricsEnabledQueryParams extends SpeakeasyBase {
    action: GetUpdateConfigurationSetReputationMetricsEnabledActionEnum;
    configurationSetName: string;
    enabled: boolean;
    version: GetUpdateConfigurationSetReputationMetricsEnabledVersionEnum;
}
export declare class GetUpdateConfigurationSetReputationMetricsEnabledHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUpdateConfigurationSetReputationMetricsEnabledRequest extends SpeakeasyBase {
    queryParams: GetUpdateConfigurationSetReputationMetricsEnabledQueryParams;
    headers: GetUpdateConfigurationSetReputationMetricsEnabledHeaders;
}
export declare class GetUpdateConfigurationSetReputationMetricsEnabledResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
