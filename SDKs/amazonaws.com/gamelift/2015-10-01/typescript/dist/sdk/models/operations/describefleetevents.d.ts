import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeFleetEventsQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum DescribeFleetEventsXAmzTargetEnum {
    GameLiftDescribeFleetEvents = "GameLift.DescribeFleetEvents"
}
export declare class DescribeFleetEventsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeFleetEventsXAmzTargetEnum;
}
export declare class DescribeFleetEventsRequest extends SpeakeasyBase {
    queryParams: DescribeFleetEventsQueryParams;
    headers: DescribeFleetEventsHeaders;
    request: shared.DescribeFleetEventsInput;
}
export declare class DescribeFleetEventsResponse extends SpeakeasyBase {
    contentType: string;
    describeFleetEventsOutput?: shared.DescribeFleetEventsOutput;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
