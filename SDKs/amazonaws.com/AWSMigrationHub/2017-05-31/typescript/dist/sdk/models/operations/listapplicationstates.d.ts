import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListApplicationStatesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListApplicationStatesXAmzTargetEnum {
    AwsMigrationHubListApplicationStates = "AWSMigrationHub.ListApplicationStates"
}
export declare class ListApplicationStatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListApplicationStatesXAmzTargetEnum;
}
export declare class ListApplicationStatesRequest extends SpeakeasyBase {
    queryParams: ListApplicationStatesQueryParams;
    headers: ListApplicationStatesHeaders;
    request: shared.ListApplicationStatesRequest;
}
export declare class ListApplicationStatesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    homeRegionNotSetException?: any;
    internalServerError?: any;
    invalidInputException?: any;
    listApplicationStatesResult?: shared.ListApplicationStatesResult;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
