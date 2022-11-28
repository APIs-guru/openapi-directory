import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeGameServerGroupXAmzTargetEnum {
    GameLiftDescribeGameServerGroup = "GameLift.DescribeGameServerGroup"
}
export declare class DescribeGameServerGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeGameServerGroupXAmzTargetEnum;
}
export declare class DescribeGameServerGroupRequest extends SpeakeasyBase {
    headers: DescribeGameServerGroupHeaders;
    request: shared.DescribeGameServerGroupInput;
}
export declare class DescribeGameServerGroupResponse extends SpeakeasyBase {
    contentType: string;
    describeGameServerGroupOutput?: shared.DescribeGameServerGroupOutput;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
