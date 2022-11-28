import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMergeConflictsQueryParams extends SpeakeasyBase {
    maxConflictFiles?: string;
    nextToken?: string;
}
export declare enum GetMergeConflictsXAmzTargetEnum {
    CodeCommit20150413GetMergeConflicts = "CodeCommit_20150413.GetMergeConflicts"
}
export declare class GetMergeConflictsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetMergeConflictsXAmzTargetEnum;
}
export declare class GetMergeConflictsRequest extends SpeakeasyBase {
    queryParams: GetMergeConflictsQueryParams;
    headers: GetMergeConflictsHeaders;
    request: shared.GetMergeConflictsInput;
}
export declare class GetMergeConflictsResponse extends SpeakeasyBase {
    commitDoesNotExistException?: any;
    commitRequiredException?: any;
    contentType: string;
    encryptionIntegrityChecksFailedException?: any;
    encryptionKeyAccessDeniedException?: any;
    encryptionKeyDisabledException?: any;
    encryptionKeyNotFoundException?: any;
    encryptionKeyUnavailableException?: any;
    getMergeConflictsOutput?: shared.GetMergeConflictsOutput;
    invalidCommitException?: any;
    invalidConflictDetailLevelException?: any;
    invalidConflictResolutionStrategyException?: any;
    invalidContinuationTokenException?: any;
    invalidDestinationCommitSpecifierException?: any;
    invalidMaxConflictFilesException?: any;
    invalidMergeOptionException?: any;
    invalidRepositoryNameException?: any;
    invalidSourceCommitSpecifierException?: any;
    maximumFileContentToLoadExceededException?: any;
    maximumItemsToCompareExceededException?: any;
    mergeOptionRequiredException?: any;
    repositoryDoesNotExistException?: any;
    repositoryNameRequiredException?: any;
    statusCode: number;
    tipsDivergenceExceededException?: any;
}
