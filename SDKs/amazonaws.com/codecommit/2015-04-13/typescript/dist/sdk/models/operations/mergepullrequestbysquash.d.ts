import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum MergePullRequestBySquashXAmzTargetEnum {
    CodeCommit20150413MergePullRequestBySquash = "CodeCommit_20150413.MergePullRequestBySquash"
}
export declare class MergePullRequestBySquashHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: MergePullRequestBySquashXAmzTargetEnum;
}
export declare class MergePullRequestBySquashRequest extends SpeakeasyBase {
    headers: MergePullRequestBySquashHeaders;
    request: shared.MergePullRequestBySquashInput;
}
export declare class MergePullRequestBySquashResponse extends SpeakeasyBase {
    commitMessageLengthExceededException?: any;
    concurrentReferenceUpdateException?: any;
    contentType: string;
    encryptionIntegrityChecksFailedException?: any;
    encryptionKeyAccessDeniedException?: any;
    encryptionKeyDisabledException?: any;
    encryptionKeyNotFoundException?: any;
    encryptionKeyUnavailableException?: any;
    fileContentSizeLimitExceededException?: any;
    folderContentSizeLimitExceededException?: any;
    invalidCommitIdException?: any;
    invalidConflictDetailLevelException?: any;
    invalidConflictResolutionException?: any;
    invalidConflictResolutionStrategyException?: any;
    invalidEmailException?: any;
    invalidFileModeException?: any;
    invalidPathException?: any;
    invalidPullRequestIdException?: any;
    invalidReplacementContentException?: any;
    invalidReplacementTypeException?: any;
    invalidRepositoryNameException?: any;
    manualMergeRequiredException?: any;
    maximumConflictResolutionEntriesExceededException?: any;
    maximumFileContentToLoadExceededException?: any;
    maximumItemsToCompareExceededException?: any;
    mergePullRequestBySquashOutput?: shared.MergePullRequestBySquashOutput;
    multipleConflictResolutionEntriesException?: any;
    nameLengthExceededException?: any;
    pathRequiredException?: any;
    pullRequestAlreadyClosedException?: any;
    pullRequestApprovalRulesNotSatisfiedException?: any;
    pullRequestDoesNotExistException?: any;
    pullRequestIdRequiredException?: any;
    replacementContentRequiredException?: any;
    replacementTypeRequiredException?: any;
    repositoryDoesNotExistException?: any;
    repositoryNameRequiredException?: any;
    repositoryNotAssociatedWithPullRequestException?: any;
    statusCode: number;
    tipOfSourceReferenceIsDifferentException?: any;
    tipsDivergenceExceededException?: any;
}
