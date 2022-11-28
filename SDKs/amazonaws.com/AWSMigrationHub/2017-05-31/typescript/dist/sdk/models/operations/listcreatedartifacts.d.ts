import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListCreatedArtifactsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListCreatedArtifactsXAmzTargetEnum {
    AwsMigrationHubListCreatedArtifacts = "AWSMigrationHub.ListCreatedArtifacts"
}
export declare class ListCreatedArtifactsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListCreatedArtifactsXAmzTargetEnum;
}
export declare class ListCreatedArtifactsRequest extends SpeakeasyBase {
    queryParams: ListCreatedArtifactsQueryParams;
    headers: ListCreatedArtifactsHeaders;
    request: shared.ListCreatedArtifactsRequest;
}
export declare class ListCreatedArtifactsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    homeRegionNotSetException?: any;
    internalServerError?: any;
    invalidInputException?: any;
    listCreatedArtifactsResult?: shared.ListCreatedArtifactsResult;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
