import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeLaunchConfigurationsActionEnum {
    DescribeLaunchConfigurations = "DescribeLaunchConfigurations"
}
export declare enum GetDescribeLaunchConfigurationsVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GetDescribeLaunchConfigurationsQueryParams extends SpeakeasyBase {
    action: GetDescribeLaunchConfigurationsActionEnum;
    launchConfigurationNames?: string[];
    maxRecords?: number;
    nextToken?: string;
    version: GetDescribeLaunchConfigurationsVersionEnum;
}
export declare class GetDescribeLaunchConfigurationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeLaunchConfigurationsRequest extends SpeakeasyBase {
    queryParams: GetDescribeLaunchConfigurationsQueryParams;
    headers: GetDescribeLaunchConfigurationsHeaders;
}
export declare class GetDescribeLaunchConfigurationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
