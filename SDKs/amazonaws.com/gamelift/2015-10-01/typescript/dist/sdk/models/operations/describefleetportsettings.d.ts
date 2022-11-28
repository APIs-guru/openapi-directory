import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeFleetPortSettingsXAmzTargetEnum {
    GameLiftDescribeFleetPortSettings = "GameLift.DescribeFleetPortSettings"
}
export declare class DescribeFleetPortSettingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeFleetPortSettingsXAmzTargetEnum;
}
export declare class DescribeFleetPortSettingsRequest extends SpeakeasyBase {
    headers: DescribeFleetPortSettingsHeaders;
    request: shared.DescribeFleetPortSettingsInput;
}
export declare class DescribeFleetPortSettingsResponse extends SpeakeasyBase {
    contentType: string;
    describeFleetPortSettingsOutput?: shared.DescribeFleetPortSettingsOutput;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
