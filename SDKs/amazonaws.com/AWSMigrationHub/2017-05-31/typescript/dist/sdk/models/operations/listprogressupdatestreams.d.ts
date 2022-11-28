import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListProgressUpdateStreamsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListProgressUpdateStreamsXAmzTargetEnum {
    AwsMigrationHubListProgressUpdateStreams = "AWSMigrationHub.ListProgressUpdateStreams"
}
export declare class ListProgressUpdateStreamsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListProgressUpdateStreamsXAmzTargetEnum;
}
export declare class ListProgressUpdateStreamsRequest extends SpeakeasyBase {
    queryParams: ListProgressUpdateStreamsQueryParams;
    headers: ListProgressUpdateStreamsHeaders;
    request: shared.ListProgressUpdateStreamsRequest;
}
export declare class ListProgressUpdateStreamsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    homeRegionNotSetException?: any;
    internalServerError?: any;
    invalidInputException?: any;
    listProgressUpdateStreamsResult?: shared.ListProgressUpdateStreamsResult;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
