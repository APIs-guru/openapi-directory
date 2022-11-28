import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum MergePullRequestByFastForwardXAmzTargetEnum {
    CodeCommit20150413MergePullRequestByFastForward = "CodeCommit_20150413.MergePullRequestByFastForward"
}
export declare class MergePullRequestByFastForwardHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: MergePullRequestByFastForwardXAmzTargetEnum;
}
export declare class MergePullRequestByFastForwardRequest extends SpeakeasyBase {
    headers: MergePullRequestByFastForwardHeaders;
    request: shared.MergePullRequestByFastForwardInput;
}
export declare class MergePullRequestByFastForwardResponse extends SpeakeasyBase {
    concurrentReferenceUpdateException?: any;
    contentType: string;
    encryptionIntegrityChecksFailedException?: any;
    encryptionKeyAccessDeniedException?: any;
    encryptionKeyDisabledException?: any;
    encryptionKeyNotFoundException?: any;
    encryptionKeyUnavailableException?: any;
    invalidCommitIdException?: any;
    invalidPullRequestIdException?: any;
    invalidRepositoryNameException?: any;
    manualMergeRequiredException?: any;
    mergePullRequestByFastForwardOutput?: shared.MergePullRequestByFastForwardOutput;
    pullRequestAlreadyClosedException?: any;
    pullRequestApprovalRulesNotSatisfiedException?: any;
    pullRequestDoesNotExistException?: any;
    pullRequestIdRequiredException?: any;
    referenceDoesNotExistException?: any;
    repositoryDoesNotExistException?: any;
    repositoryNameRequiredException?: any;
    repositoryNotAssociatedWithPullRequestException?: any;
    statusCode: number;
    tipOfSourceReferenceIsDifferentException?: any;
}
