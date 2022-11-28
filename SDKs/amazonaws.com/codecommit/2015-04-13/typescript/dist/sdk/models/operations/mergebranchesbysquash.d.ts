import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum MergeBranchesBySquashXAmzTargetEnum {
    CodeCommit20150413MergeBranchesBySquash = "CodeCommit_20150413.MergeBranchesBySquash"
}
export declare class MergeBranchesBySquashHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: MergeBranchesBySquashXAmzTargetEnum;
}
export declare class MergeBranchesBySquashRequest extends SpeakeasyBase {
    headers: MergeBranchesBySquashHeaders;
    request: shared.MergeBranchesBySquashInput;
}
export declare class MergeBranchesBySquashResponse extends SpeakeasyBase {
    branchDoesNotExistException?: any;
    branchNameIsTagNameException?: any;
    branchNameRequiredException?: any;
    commitDoesNotExistException?: any;
    commitMessageLengthExceededException?: any;
    commitRequiredException?: any;
    concurrentReferenceUpdateException?: any;
    contentType: string;
    encryptionIntegrityChecksFailedException?: any;
    encryptionKeyAccessDeniedException?: any;
    encryptionKeyDisabledException?: any;
    encryptionKeyNotFoundException?: any;
    encryptionKeyUnavailableException?: any;
    fileContentSizeLimitExceededException?: any;
    fileModeRequiredException?: any;
    folderContentSizeLimitExceededException?: any;
    invalidBranchNameException?: any;
    invalidCommitException?: any;
    invalidConflictDetailLevelException?: any;
    invalidConflictResolutionException?: any;
    invalidConflictResolutionStrategyException?: any;
    invalidEmailException?: any;
    invalidFileModeException?: any;
    invalidPathException?: any;
    invalidReplacementContentException?: any;
    invalidReplacementTypeException?: any;
    invalidRepositoryNameException?: any;
    invalidTargetBranchException?: any;
    manualMergeRequiredException?: any;
    maximumConflictResolutionEntriesExceededException?: any;
    maximumFileContentToLoadExceededException?: any;
    maximumItemsToCompareExceededException?: any;
    mergeBranchesBySquashOutput?: shared.MergeBranchesBySquashOutput;
    multipleConflictResolutionEntriesException?: any;
    nameLengthExceededException?: any;
    pathRequiredException?: any;
    replacementContentRequiredException?: any;
    replacementTypeRequiredException?: any;
    repositoryDoesNotExistException?: any;
    repositoryNameRequiredException?: any;
    statusCode: number;
    tipsDivergenceExceededException?: any;
}
