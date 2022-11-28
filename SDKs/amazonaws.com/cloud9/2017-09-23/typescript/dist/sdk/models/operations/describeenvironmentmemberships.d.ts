import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeEnvironmentMembershipsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeEnvironmentMembershipsXAmzTargetEnum {
    AwsCloud9WorkspaceManagementServiceDescribeEnvironmentMemberships = "AWSCloud9WorkspaceManagementService.DescribeEnvironmentMemberships"
}
export declare class DescribeEnvironmentMembershipsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEnvironmentMembershipsXAmzTargetEnum;
}
export declare class DescribeEnvironmentMembershipsRequest extends SpeakeasyBase {
    queryParams: DescribeEnvironmentMembershipsQueryParams;
    headers: DescribeEnvironmentMembershipsHeaders;
    request: shared.DescribeEnvironmentMembershipsRequest;
}
export declare class DescribeEnvironmentMembershipsResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    describeEnvironmentMembershipsResult?: shared.DescribeEnvironmentMembershipsResult;
    forbiddenException?: any;
    internalServerErrorException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
