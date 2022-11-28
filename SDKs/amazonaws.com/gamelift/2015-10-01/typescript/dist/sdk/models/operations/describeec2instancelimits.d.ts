import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeEc2InstanceLimitsXAmzTargetEnum {
    GameLiftDescribeEc2InstanceLimits = "GameLift.DescribeEC2InstanceLimits"
}
export declare class DescribeEc2InstanceLimitsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEc2InstanceLimitsXAmzTargetEnum;
}
export declare class DescribeEc2InstanceLimitsRequest extends SpeakeasyBase {
    headers: DescribeEc2InstanceLimitsHeaders;
    request: shared.DescribeEc2InstanceLimitsInput;
}
export declare class DescribeEc2InstanceLimitsResponse extends SpeakeasyBase {
    contentType: string;
    describeEc2InstanceLimitsOutput?: shared.DescribeEc2InstanceLimitsOutput;
    internalServiceException?: any;
    invalidRequestException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
