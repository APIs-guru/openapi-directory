import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBlueprintRunsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum GetBlueprintRunsXAmzTargetEnum {
    AwsGlueGetBlueprintRuns = "AWSGlue.GetBlueprintRuns"
}
export declare class GetBlueprintRunsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetBlueprintRunsXAmzTargetEnum;
}
export declare class GetBlueprintRunsRequest extends SpeakeasyBase {
    queryParams: GetBlueprintRunsQueryParams;
    headers: GetBlueprintRunsHeaders;
    request: shared.GetBlueprintRunsRequest;
}
export declare class GetBlueprintRunsResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    getBlueprintRunsResponse?: shared.GetBlueprintRunsResponse;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
