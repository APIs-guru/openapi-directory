import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribePullRequestEventsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribePullRequestEventsXAmzTargetEnum {
    CodeCommit20150413DescribePullRequestEvents = "CodeCommit_20150413.DescribePullRequestEvents"
}
export declare class DescribePullRequestEventsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribePullRequestEventsXAmzTargetEnum;
}
export declare class DescribePullRequestEventsRequest extends SpeakeasyBase {
    queryParams: DescribePullRequestEventsQueryParams;
    headers: DescribePullRequestEventsHeaders;
    request: shared.DescribePullRequestEventsInput;
}
export declare class DescribePullRequestEventsResponse extends SpeakeasyBase {
    actorDoesNotExistException?: any;
    contentType: string;
    describePullRequestEventsOutput?: shared.DescribePullRequestEventsOutput;
    encryptionIntegrityChecksFailedException?: any;
    encryptionKeyAccessDeniedException?: any;
    encryptionKeyDisabledException?: any;
    encryptionKeyNotFoundException?: any;
    encryptionKeyUnavailableException?: any;
    invalidActorArnException?: any;
    invalidContinuationTokenException?: any;
    invalidMaxResultsException?: any;
    invalidPullRequestEventTypeException?: any;
    invalidPullRequestIdException?: any;
    pullRequestDoesNotExistException?: any;
    pullRequestIdRequiredException?: any;
    statusCode: number;
}
