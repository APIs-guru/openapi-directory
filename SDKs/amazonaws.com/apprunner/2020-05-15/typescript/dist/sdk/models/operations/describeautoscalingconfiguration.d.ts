import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeAutoScalingConfigurationXAmzTargetEnum {
    AppRunnerDescribeAutoScalingConfiguration = "AppRunner.DescribeAutoScalingConfiguration"
}
export declare class DescribeAutoScalingConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAutoScalingConfigurationXAmzTargetEnum;
}
export declare class DescribeAutoScalingConfigurationRequest extends SpeakeasyBase {
    headers: DescribeAutoScalingConfigurationHeaders;
    request: shared.DescribeAutoScalingConfigurationRequest;
}
export declare class DescribeAutoScalingConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    describeAutoScalingConfigurationResponse?: shared.DescribeAutoScalingConfigurationResponse;
    internalServiceErrorException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
