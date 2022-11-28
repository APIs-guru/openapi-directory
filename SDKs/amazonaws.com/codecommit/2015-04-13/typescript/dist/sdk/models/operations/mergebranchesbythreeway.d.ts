import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum MergeBranchesByThreeWayXAmzTargetEnum {
    CodeCommit20150413MergeBranchesByThreeWay = "CodeCommit_20150413.MergeBranchesByThreeWay"
}
export declare class MergeBranchesByThreeWayHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: MergeBranchesByThreeWayXAmzTargetEnum;
}
export declare class MergeBranchesByThreeWayRequest extends SpeakeasyBase {
    headers: MergeBranchesByThreeWayHeaders;
    request: shared.MergeBranchesByThreeWayInput;
}
export declare class MergeBranchesByThreeWayResponse extends SpeakeasyBase {
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
    mergeBranchesByThreeWayOutput?: shared.MergeBranchesByThreeWayOutput;
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
