import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMlTaskRunsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum GetMlTaskRunsXAmzTargetEnum {
    AwsGlueGetMlTaskRuns = "AWSGlue.GetMLTaskRuns"
}
export declare class GetMlTaskRunsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetMlTaskRunsXAmzTargetEnum;
}
export declare class GetMlTaskRunsRequest extends SpeakeasyBase {
    queryParams: GetMlTaskRunsQueryParams;
    headers: GetMlTaskRunsHeaders;
    request: shared.GetMlTaskRunsRequest;
}
export declare class GetMlTaskRunsResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    getMlTaskRunsResponse?: shared.GetMlTaskRunsResponse;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
