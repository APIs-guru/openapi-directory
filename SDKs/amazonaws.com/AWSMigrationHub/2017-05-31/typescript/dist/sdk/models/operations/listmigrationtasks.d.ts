import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListMigrationTasksQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListMigrationTasksXAmzTargetEnum {
    AwsMigrationHubListMigrationTasks = "AWSMigrationHub.ListMigrationTasks"
}
export declare class ListMigrationTasksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListMigrationTasksXAmzTargetEnum;
}
export declare class ListMigrationTasksRequest extends SpeakeasyBase {
    queryParams: ListMigrationTasksQueryParams;
    headers: ListMigrationTasksHeaders;
    request: shared.ListMigrationTasksRequest;
}
export declare class ListMigrationTasksResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    homeRegionNotSetException?: any;
    internalServerError?: any;
    invalidInputException?: any;
    listMigrationTasksResult?: shared.ListMigrationTasksResult;
    policyErrorException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
