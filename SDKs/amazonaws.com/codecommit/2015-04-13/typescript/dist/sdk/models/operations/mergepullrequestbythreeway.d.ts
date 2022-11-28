import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum MergePullRequestByThreeWayXAmzTargetEnum {
    CodeCommit20150413MergePullRequestByThreeWay = "CodeCommit_20150413.MergePullRequestByThreeWay"
}
export declare class MergePullRequestByThreeWayHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: MergePullRequestByThreeWayXAmzTargetEnum;
}
export declare class MergePullRequestByThreeWayRequest extends SpeakeasyBase {
    headers: MergePullRequestByThreeWayHeaders;
    request: shared.MergePullRequestByThreeWayInput;
}
export declare class MergePullRequestByThreeWayResponse extends SpeakeasyBase {
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
    mergePullRequestByThreeWayOutput?: shared.MergePullRequestByThreeWayOutput;
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
