import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetPullRequestXAmzTargetEnum {
    CodeCommit20150413GetPullRequest = "CodeCommit_20150413.GetPullRequest"
}
export declare class GetPullRequestHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetPullRequestXAmzTargetEnum;
}
export declare class GetPullRequestRequest extends SpeakeasyBase {
    headers: GetPullRequestHeaders;
    request: shared.GetPullRequestInput;
}
export declare class GetPullRequestResponse extends SpeakeasyBase {
    contentType: string;
    encryptionIntegrityChecksFailedException?: any;
    encryptionKeyAccessDeniedException?: any;
    encryptionKeyDisabledException?: any;
    encryptionKeyNotFoundException?: any;
    encryptionKeyUnavailableException?: any;
    getPullRequestOutput?: shared.GetPullRequestOutput;
    invalidPullRequestIdException?: any;
    pullRequestDoesNotExistException?: any;
    pullRequestIdRequiredException?: any;
    statusCode: number;
}
