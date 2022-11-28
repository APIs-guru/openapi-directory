import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeEnvironmentsXAmzTargetEnum {
    AwsCloud9WorkspaceManagementServiceDescribeEnvironments = "AWSCloud9WorkspaceManagementService.DescribeEnvironments"
}
export declare class DescribeEnvironmentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEnvironmentsXAmzTargetEnum;
}
export declare class DescribeEnvironmentsRequest extends SpeakeasyBase {
    headers: DescribeEnvironmentsHeaders;
    request: shared.DescribeEnvironmentsRequest;
}
export declare class DescribeEnvironmentsResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    describeEnvironmentsResult?: shared.DescribeEnvironmentsResult;
    forbiddenException?: any;
    internalServerErrorException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
