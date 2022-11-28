import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeEventSubscriptionsQueryParams extends SpeakeasyBase {
    marker?: string;
    maxRecords?: string;
}
export declare enum DescribeEventSubscriptionsXAmzTargetEnum {
    AmazonDmSv20160101DescribeEventSubscriptions = "AmazonDMSv20160101.DescribeEventSubscriptions"
}
export declare class DescribeEventSubscriptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEventSubscriptionsXAmzTargetEnum;
}
export declare class DescribeEventSubscriptionsRequest extends SpeakeasyBase {
    queryParams: DescribeEventSubscriptionsQueryParams;
    headers: DescribeEventSubscriptionsHeaders;
    request: shared.DescribeEventSubscriptionsMessage;
}
export declare class DescribeEventSubscriptionsResponse extends SpeakeasyBase {
    contentType: string;
    describeEventSubscriptionsResponse?: shared.DescribeEventSubscriptionsResponse;
    resourceNotFoundFault?: any;
    statusCode: number;
}
