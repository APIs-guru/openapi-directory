import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListPullRequestsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListPullRequestsXAmzTargetEnum {
    CodeCommit20150413ListPullRequests = "CodeCommit_20150413.ListPullRequests"
}
export declare class ListPullRequestsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListPullRequestsXAmzTargetEnum;
}
export declare class ListPullRequestsRequest extends SpeakeasyBase {
    queryParams: ListPullRequestsQueryParams;
    headers: ListPullRequestsHeaders;
    request: shared.ListPullRequestsInput;
}
export declare class ListPullRequestsResponse extends SpeakeasyBase {
    authorDoesNotExistException?: any;
    contentType: string;
    encryptionIntegrityChecksFailedException?: any;
    encryptionKeyAccessDeniedException?: any;
    encryptionKeyDisabledException?: any;
    encryptionKeyNotFoundException?: any;
    encryptionKeyUnavailableException?: any;
    invalidAuthorArnException?: any;
    invalidContinuationTokenException?: any;
    invalidMaxResultsException?: any;
    invalidPullRequestStatusException?: any;
    invalidRepositoryNameException?: any;
    listPullRequestsOutput?: shared.ListPullRequestsOutput;
    repositoryDoesNotExistException?: any;
    repositoryNameRequiredException?: any;
    statusCode: number;
}
