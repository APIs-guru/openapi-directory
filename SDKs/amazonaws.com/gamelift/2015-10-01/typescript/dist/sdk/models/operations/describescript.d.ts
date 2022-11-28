import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeScriptXAmzTargetEnum {
    GameLiftDescribeScript = "GameLift.DescribeScript"
}
export declare class DescribeScriptHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeScriptXAmzTargetEnum;
}
export declare class DescribeScriptRequest extends SpeakeasyBase {
    headers: DescribeScriptHeaders;
    request: shared.DescribeScriptInput;
}
export declare class DescribeScriptResponse extends SpeakeasyBase {
    contentType: string;
    describeScriptOutput?: shared.DescribeScriptOutput;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
