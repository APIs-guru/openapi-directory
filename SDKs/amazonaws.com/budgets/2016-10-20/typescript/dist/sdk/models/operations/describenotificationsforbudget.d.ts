import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeNotificationsForBudgetQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeNotificationsForBudgetXAmzTargetEnum {
    AwsBudgetServiceGatewayDescribeNotificationsForBudget = "AWSBudgetServiceGateway.DescribeNotificationsForBudget"
}
export declare class DescribeNotificationsForBudgetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeNotificationsForBudgetXAmzTargetEnum;
}
export declare class DescribeNotificationsForBudgetRequest extends SpeakeasyBase {
    queryParams: DescribeNotificationsForBudgetQueryParams;
    headers: DescribeNotificationsForBudgetHeaders;
    request: shared.DescribeNotificationsForBudgetRequest;
}
export declare class DescribeNotificationsForBudgetResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeNotificationsForBudgetResponse?: shared.DescribeNotificationsForBudgetResponse;
    expiredNextTokenException?: any;
    internalErrorException?: any;
    invalidNextTokenException?: any;
    invalidParameterException?: any;
    notFoundException?: any;
    statusCode: number;
}
