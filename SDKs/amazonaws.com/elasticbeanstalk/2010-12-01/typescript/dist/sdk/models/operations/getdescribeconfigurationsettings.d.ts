import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeConfigurationSettingsActionEnum {
    DescribeConfigurationSettings = "DescribeConfigurationSettings"
}
export declare enum GetDescribeConfigurationSettingsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetDescribeConfigurationSettingsQueryParams extends SpeakeasyBase {
    action: GetDescribeConfigurationSettingsActionEnum;
    applicationName: string;
    environmentName?: string;
    templateName?: string;
    version: GetDescribeConfigurationSettingsVersionEnum;
}
export declare class GetDescribeConfigurationSettingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeConfigurationSettingsRequest extends SpeakeasyBase {
    queryParams: GetDescribeConfigurationSettingsQueryParams;
    headers: GetDescribeConfigurationSettingsHeaders;
}
export declare class GetDescribeConfigurationSettingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
