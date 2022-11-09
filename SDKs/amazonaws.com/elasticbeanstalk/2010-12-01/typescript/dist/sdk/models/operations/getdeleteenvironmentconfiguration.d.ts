import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteEnvironmentConfigurationActionEnum {
    DeleteEnvironmentConfiguration = "DeleteEnvironmentConfiguration"
}
export declare enum GetDeleteEnvironmentConfigurationVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetDeleteEnvironmentConfigurationQueryParams extends SpeakeasyBase {
    action: GetDeleteEnvironmentConfigurationActionEnum;
    applicationName: string;
    environmentName: string;
    version: GetDeleteEnvironmentConfigurationVersionEnum;
}
export declare class GetDeleteEnvironmentConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteEnvironmentConfigurationRequest extends SpeakeasyBase {
    queryParams: GetDeleteEnvironmentConfigurationQueryParams;
    headers: GetDeleteEnvironmentConfigurationHeaders;
}
export declare class GetDeleteEnvironmentConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
