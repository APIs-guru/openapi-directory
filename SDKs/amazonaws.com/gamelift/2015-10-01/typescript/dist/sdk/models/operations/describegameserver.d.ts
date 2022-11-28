import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeGameServerXAmzTargetEnum {
    GameLiftDescribeGameServer = "GameLift.DescribeGameServer"
}
export declare class DescribeGameServerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeGameServerXAmzTargetEnum;
}
export declare class DescribeGameServerRequest extends SpeakeasyBase {
    headers: DescribeGameServerHeaders;
    request: shared.DescribeGameServerInput;
}
export declare class DescribeGameServerResponse extends SpeakeasyBase {
    contentType: string;
    describeGameServerOutput?: shared.DescribeGameServerOutput;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
