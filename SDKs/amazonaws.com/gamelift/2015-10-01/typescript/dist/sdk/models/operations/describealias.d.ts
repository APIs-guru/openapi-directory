import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeAliasXAmzTargetEnum {
    GameLiftDescribeAlias = "GameLift.DescribeAlias"
}
export declare class DescribeAliasHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAliasXAmzTargetEnum;
}
export declare class DescribeAliasRequest extends SpeakeasyBase {
    headers: DescribeAliasHeaders;
    request: shared.DescribeAliasInput;
}
export declare class DescribeAliasResponse extends SpeakeasyBase {
    contentType: string;
    describeAliasOutput?: shared.DescribeAliasOutput;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
