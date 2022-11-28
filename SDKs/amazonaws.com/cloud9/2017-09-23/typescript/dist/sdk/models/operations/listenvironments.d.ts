import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListEnvironmentsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListEnvironmentsXAmzTargetEnum {
    AwsCloud9WorkspaceManagementServiceListEnvironments = "AWSCloud9WorkspaceManagementService.ListEnvironments"
}
export declare class ListEnvironmentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListEnvironmentsXAmzTargetEnum;
}
export declare class ListEnvironmentsRequest extends SpeakeasyBase {
    queryParams: ListEnvironmentsQueryParams;
    headers: ListEnvironmentsHeaders;
    request: shared.ListEnvironmentsRequest;
}
export declare class ListEnvironmentsResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    limitExceededException?: any;
    listEnvironmentsResult?: shared.ListEnvironmentsResult;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
