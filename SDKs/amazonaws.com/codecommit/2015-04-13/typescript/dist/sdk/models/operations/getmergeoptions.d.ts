import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetMergeOptionsXAmzTargetEnum {
    CodeCommit20150413GetMergeOptions = "CodeCommit_20150413.GetMergeOptions"
}
export declare class GetMergeOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetMergeOptionsXAmzTargetEnum;
}
export declare class GetMergeOptionsRequest extends SpeakeasyBase {
    headers: GetMergeOptionsHeaders;
    request: shared.GetMergeOptionsInput;
}
export declare class GetMergeOptionsResponse extends SpeakeasyBase {
    commitDoesNotExistException?: any;
    commitRequiredException?: any;
    contentType: string;
    encryptionIntegrityChecksFailedException?: any;
    encryptionKeyAccessDeniedException?: any;
    encryptionKeyDisabledException?: any;
    encryptionKeyNotFoundException?: any;
    encryptionKeyUnavailableException?: any;
    getMergeOptionsOutput?: shared.GetMergeOptionsOutput;
    invalidCommitException?: any;
    invalidConflictDetailLevelException?: any;
    invalidConflictResolutionStrategyException?: any;
    invalidRepositoryNameException?: any;
    maximumFileContentToLoadExceededException?: any;
    maximumItemsToCompareExceededException?: any;
    repositoryDoesNotExistException?: any;
    repositoryNameRequiredException?: any;
    statusCode: number;
    tipsDivergenceExceededException?: any;
}
