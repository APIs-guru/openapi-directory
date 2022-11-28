import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeScalingActivitiesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeScalingActivitiesXAmzTargetEnum {
    AnyScaleFrontendServiceDescribeScalingActivities = "AnyScaleFrontendService.DescribeScalingActivities"
}
export declare class DescribeScalingActivitiesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeScalingActivitiesXAmzTargetEnum;
}
export declare class DescribeScalingActivitiesRequest extends SpeakeasyBase {
    queryParams: DescribeScalingActivitiesQueryParams;
    headers: DescribeScalingActivitiesHeaders;
    request: shared.DescribeScalingActivitiesRequest;
}
export declare class DescribeScalingActivitiesResponse extends SpeakeasyBase {
    concurrentUpdateException?: any;
    contentType: string;
    describeScalingActivitiesResponse?: shared.DescribeScalingActivitiesResponse;
    internalServiceException?: any;
    invalidNextTokenException?: any;
    statusCode: number;
    validationException?: any;
}
