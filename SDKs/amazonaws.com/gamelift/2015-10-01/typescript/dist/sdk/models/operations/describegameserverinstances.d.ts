import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeGameServerInstancesQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum DescribeGameServerInstancesXAmzTargetEnum {
    GameLiftDescribeGameServerInstances = "GameLift.DescribeGameServerInstances"
}
export declare class DescribeGameServerInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeGameServerInstancesXAmzTargetEnum;
}
export declare class DescribeGameServerInstancesRequest extends SpeakeasyBase {
    queryParams: DescribeGameServerInstancesQueryParams;
    headers: DescribeGameServerInstancesHeaders;
    request: shared.DescribeGameServerInstancesInput;
}
export declare class DescribeGameServerInstancesResponse extends SpeakeasyBase {
    contentType: string;
    describeGameServerInstancesOutput?: shared.DescribeGameServerInstancesOutput;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
