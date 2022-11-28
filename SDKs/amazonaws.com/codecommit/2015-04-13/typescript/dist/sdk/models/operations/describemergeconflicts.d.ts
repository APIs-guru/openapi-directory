import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeMergeConflictsQueryParams extends SpeakeasyBase {
    maxMergeHunks?: string;
    nextToken?: string;
}
export declare enum DescribeMergeConflictsXAmzTargetEnum {
    CodeCommit20150413DescribeMergeConflicts = "CodeCommit_20150413.DescribeMergeConflicts"
}
export declare class DescribeMergeConflictsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeMergeConflictsXAmzTargetEnum;
}
export declare class DescribeMergeConflictsRequest extends SpeakeasyBase {
    queryParams: DescribeMergeConflictsQueryParams;
    headers: DescribeMergeConflictsHeaders;
    request: shared.DescribeMergeConflictsInput;
}
export declare class DescribeMergeConflictsResponse extends SpeakeasyBase {
    commitDoesNotExistException?: any;
    commitRequiredException?: any;
    contentType: string;
    describeMergeConflictsOutput?: shared.DescribeMergeConflictsOutput;
    encryptionIntegrityChecksFailedException?: any;
    encryptionKeyAccessDeniedException?: any;
    encryptionKeyDisabledException?: any;
    encryptionKeyNotFoundException?: any;
    encryptionKeyUnavailableException?: any;
    fileDoesNotExistException?: any;
    invalidCommitException?: any;
    invalidConflictDetailLevelException?: any;
    invalidConflictResolutionStrategyException?: any;
    invalidContinuationTokenException?: any;
    invalidMaxMergeHunksException?: any;
    invalidMergeOptionException?: any;
    invalidPathException?: any;
    invalidRepositoryNameException?: any;
    maximumFileContentToLoadExceededException?: any;
    maximumItemsToCompareExceededException?: any;
    mergeOptionRequiredException?: any;
    pathRequiredException?: any;
    repositoryDoesNotExistException?: any;
    repositoryNameRequiredException?: any;
    statusCode: number;
    tipsDivergenceExceededException?: any;
}
