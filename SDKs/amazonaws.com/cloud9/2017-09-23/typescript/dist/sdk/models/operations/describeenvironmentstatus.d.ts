import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeEnvironmentStatusXAmzTargetEnum {
    AwsCloud9WorkspaceManagementServiceDescribeEnvironmentStatus = "AWSCloud9WorkspaceManagementService.DescribeEnvironmentStatus"
}
export declare class DescribeEnvironmentStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEnvironmentStatusXAmzTargetEnum;
}
export declare class DescribeEnvironmentStatusRequest extends SpeakeasyBase {
    headers: DescribeEnvironmentStatusHeaders;
    request: shared.DescribeEnvironmentStatusRequest;
}
export declare class DescribeEnvironmentStatusResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    describeEnvironmentStatusResult?: shared.DescribeEnvironmentStatusResult;
    forbiddenException?: any;
    internalServerErrorException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
