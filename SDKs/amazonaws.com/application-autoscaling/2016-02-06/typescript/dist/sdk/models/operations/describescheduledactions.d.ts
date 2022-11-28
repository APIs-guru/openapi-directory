import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeScheduledActionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeScheduledActionsXAmzTargetEnum {
    AnyScaleFrontendServiceDescribeScheduledActions = "AnyScaleFrontendService.DescribeScheduledActions"
}
export declare class DescribeScheduledActionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeScheduledActionsXAmzTargetEnum;
}
export declare class DescribeScheduledActionsRequest extends SpeakeasyBase {
    queryParams: DescribeScheduledActionsQueryParams;
    headers: DescribeScheduledActionsHeaders;
    request: shared.DescribeScheduledActionsRequest;
}
export declare class DescribeScheduledActionsResponse extends SpeakeasyBase {
    concurrentUpdateException?: any;
    contentType: string;
    describeScheduledActionsResponse?: shared.DescribeScheduledActionsResponse;
    internalServiceException?: any;
    invalidNextTokenException?: any;
    statusCode: number;
    validationException?: any;
}
