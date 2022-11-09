import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeNotificationConfigurationsActionEnum {
    DescribeNotificationConfigurations = "DescribeNotificationConfigurations"
}
export declare enum PostDescribeNotificationConfigurationsVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostDescribeNotificationConfigurationsQueryParams extends SpeakeasyBase {
    action: PostDescribeNotificationConfigurationsActionEnum;
    maxRecords?: string;
    nextToken?: string;
    version: PostDescribeNotificationConfigurationsVersionEnum;
}
export declare class PostDescribeNotificationConfigurationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeNotificationConfigurationsRequest extends SpeakeasyBase {
    queryParams: PostDescribeNotificationConfigurationsQueryParams;
    headers: PostDescribeNotificationConfigurationsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeNotificationConfigurationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
