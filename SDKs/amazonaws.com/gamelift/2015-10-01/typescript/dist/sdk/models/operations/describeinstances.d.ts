import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeInstancesQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum DescribeInstancesXAmzTargetEnum {
    GameLiftDescribeInstances = "GameLift.DescribeInstances"
}
export declare class DescribeInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeInstancesXAmzTargetEnum;
}
export declare class DescribeInstancesRequest extends SpeakeasyBase {
    queryParams: DescribeInstancesQueryParams;
    headers: DescribeInstancesHeaders;
    request: shared.DescribeInstancesInput;
}
export declare class DescribeInstancesResponse extends SpeakeasyBase {
    contentType: string;
    describeInstancesOutput?: shared.DescribeInstancesOutput;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
