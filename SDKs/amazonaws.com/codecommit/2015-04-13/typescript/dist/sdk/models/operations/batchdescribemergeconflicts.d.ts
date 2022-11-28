import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BatchDescribeMergeConflictsXAmzTargetEnum {
    CodeCommit20150413BatchDescribeMergeConflicts = "CodeCommit_20150413.BatchDescribeMergeConflicts"
}
export declare class BatchDescribeMergeConflictsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchDescribeMergeConflictsXAmzTargetEnum;
}
export declare class BatchDescribeMergeConflictsRequest extends SpeakeasyBase {
    headers: BatchDescribeMergeConflictsHeaders;
    request: shared.BatchDescribeMergeConflictsInput;
}
export declare class BatchDescribeMergeConflictsResponse extends SpeakeasyBase {
    batchDescribeMergeConflictsOutput?: shared.BatchDescribeMergeConflictsOutput;
    commitDoesNotExistException?: any;
    commitRequiredException?: any;
    contentType: string;
    encryptionIntegrityChecksFailedException?: any;
    encryptionKeyAccessDeniedException?: any;
    encryptionKeyDisabledException?: any;
    encryptionKeyNotFoundException?: any;
    encryptionKeyUnavailableException?: any;
    invalidCommitException?: any;
    invalidConflictDetailLevelException?: any;
    invalidConflictResolutionStrategyException?: any;
    invalidContinuationTokenException?: any;
    invalidMaxConflictFilesException?: any;
    invalidMaxMergeHunksException?: any;
    invalidMergeOptionException?: any;
    invalidRepositoryNameException?: any;
    maximumFileContentToLoadExceededException?: any;
    maximumItemsToCompareExceededException?: any;
    mergeOptionRequiredException?: any;
    repositoryDoesNotExistException?: any;
    repositoryNameRequiredException?: any;
    statusCode: number;
    tipsDivergenceExceededException?: any;
}
