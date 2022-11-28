import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeNotificationConfigurationsActionEnum {
    DescribeNotificationConfigurations = "DescribeNotificationConfigurations"
}
export declare enum GetDescribeNotificationConfigurationsVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GetDescribeNotificationConfigurationsQueryParams extends SpeakeasyBase {
    action: GetDescribeNotificationConfigurationsActionEnum;
    autoScalingGroupNames?: string[];
    maxRecords?: number;
    nextToken?: string;
    version: GetDescribeNotificationConfigurationsVersionEnum;
}
export declare class GetDescribeNotificationConfigurationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeNotificationConfigurationsRequest extends SpeakeasyBase {
    queryParams: GetDescribeNotificationConfigurationsQueryParams;
    headers: GetDescribeNotificationConfigurationsHeaders;
}
export declare class GetDescribeNotificationConfigurationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
