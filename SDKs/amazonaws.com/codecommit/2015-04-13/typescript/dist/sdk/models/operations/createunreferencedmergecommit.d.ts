import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateUnreferencedMergeCommitXAmzTargetEnum {
    CodeCommit20150413CreateUnreferencedMergeCommit = "CodeCommit_20150413.CreateUnreferencedMergeCommit"
}
export declare class CreateUnreferencedMergeCommitHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateUnreferencedMergeCommitXAmzTargetEnum;
}
export declare class CreateUnreferencedMergeCommitRequest extends SpeakeasyBase {
    headers: CreateUnreferencedMergeCommitHeaders;
    request: shared.CreateUnreferencedMergeCommitInput;
}
export declare class CreateUnreferencedMergeCommitResponse extends SpeakeasyBase {
    commitDoesNotExistException?: any;
    commitMessageLengthExceededException?: any;
    commitRequiredException?: any;
    concurrentReferenceUpdateException?: any;
    contentType: string;
    createUnreferencedMergeCommitOutput?: shared.CreateUnreferencedMergeCommitOutput;
    encryptionIntegrityChecksFailedException?: any;
    encryptionKeyAccessDeniedException?: any;
    encryptionKeyDisabledException?: any;
    encryptionKeyNotFoundException?: any;
    encryptionKeyUnavailableException?: any;
    fileContentSizeLimitExceededException?: any;
    fileModeRequiredException?: any;
    folderContentSizeLimitExceededException?: any;
    invalidCommitException?: any;
    invalidConflictDetailLevelException?: any;
    invalidConflictResolutionException?: any;
    invalidConflictResolutionStrategyException?: any;
    invalidEmailException?: any;
    invalidFileModeException?: any;
    invalidMergeOptionException?: any;
    invalidPathException?: any;
    invalidReplacementContentException?: any;
    invalidReplacementTypeException?: any;
    invalidRepositoryNameException?: any;
    manualMergeRequiredException?: any;
    maximumConflictResolutionEntriesExceededException?: any;
    maximumFileContentToLoadExceededException?: any;
    maximumItemsToCompareExceededException?: any;
    mergeOptionRequiredException?: any;
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
