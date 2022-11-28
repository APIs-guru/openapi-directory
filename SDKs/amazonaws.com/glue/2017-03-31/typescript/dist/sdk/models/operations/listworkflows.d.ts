import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListWorkflowsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListWorkflowsXAmzTargetEnum {
    AwsGlueListWorkflows = "AWSGlue.ListWorkflows"
}
export declare class ListWorkflowsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListWorkflowsXAmzTargetEnum;
}
export declare class ListWorkflowsRequest extends SpeakeasyBase {
    queryParams: ListWorkflowsQueryParams;
    headers: ListWorkflowsHeaders;
    request: shared.ListWorkflowsRequest;
}
export declare class ListWorkflowsResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceException?: any;
    invalidInputException?: any;
    listWorkflowsResponse?: shared.ListWorkflowsResponse;
    operationTimeoutException?: any;
    statusCode: number;
}
