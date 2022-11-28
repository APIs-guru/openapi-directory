import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeRuntimeConfigurationXAmzTargetEnum {
    GameLiftDescribeRuntimeConfiguration = "GameLift.DescribeRuntimeConfiguration"
}
export declare class DescribeRuntimeConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeRuntimeConfigurationXAmzTargetEnum;
}
export declare class DescribeRuntimeConfigurationRequest extends SpeakeasyBase {
    headers: DescribeRuntimeConfigurationHeaders;
    request: shared.DescribeRuntimeConfigurationInput;
}
export declare class DescribeRuntimeConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    describeRuntimeConfigurationOutput?: shared.DescribeRuntimeConfigurationOutput;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
