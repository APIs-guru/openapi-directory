import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeGameSessionQueuesQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum DescribeGameSessionQueuesXAmzTargetEnum {
    GameLiftDescribeGameSessionQueues = "GameLift.DescribeGameSessionQueues"
}
export declare class DescribeGameSessionQueuesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeGameSessionQueuesXAmzTargetEnum;
}
export declare class DescribeGameSessionQueuesRequest extends SpeakeasyBase {
    queryParams: DescribeGameSessionQueuesQueryParams;
    headers: DescribeGameSessionQueuesHeaders;
    request: shared.DescribeGameSessionQueuesInput;
}
export declare class DescribeGameSessionQueuesResponse extends SpeakeasyBase {
    contentType: string;
    describeGameSessionQueuesOutput?: shared.DescribeGameSessionQueuesOutput;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
