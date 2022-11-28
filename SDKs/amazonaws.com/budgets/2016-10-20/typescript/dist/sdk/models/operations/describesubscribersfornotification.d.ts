import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeSubscribersForNotificationQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeSubscribersForNotificationXAmzTargetEnum {
    AwsBudgetServiceGatewayDescribeSubscribersForNotification = "AWSBudgetServiceGateway.DescribeSubscribersForNotification"
}
export declare class DescribeSubscribersForNotificationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeSubscribersForNotificationXAmzTargetEnum;
}
export declare class DescribeSubscribersForNotificationRequest extends SpeakeasyBase {
    queryParams: DescribeSubscribersForNotificationQueryParams;
    headers: DescribeSubscribersForNotificationHeaders;
    request: shared.DescribeSubscribersForNotificationRequest;
}
export declare class DescribeSubscribersForNotificationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeSubscribersForNotificationResponse?: shared.DescribeSubscribersForNotificationResponse;
    expiredNextTokenException?: any;
    internalErrorException?: any;
    invalidNextTokenException?: any;
    invalidParameterException?: any;
    notFoundException?: any;
    statusCode: number;
}
