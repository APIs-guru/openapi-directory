import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetMergeCommitXAmzTargetEnum {
    CodeCommit20150413GetMergeCommit = "CodeCommit_20150413.GetMergeCommit"
}
export declare class GetMergeCommitHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetMergeCommitXAmzTargetEnum;
}
export declare class GetMergeCommitRequest extends SpeakeasyBase {
    headers: GetMergeCommitHeaders;
    request: shared.GetMergeCommitInput;
}
export declare class GetMergeCommitResponse extends SpeakeasyBase {
    commitDoesNotExistException?: any;
    commitRequiredException?: any;
    contentType: string;
    encryptionIntegrityChecksFailedException?: any;
    encryptionKeyAccessDeniedException?: any;
    encryptionKeyDisabledException?: any;
    encryptionKeyNotFoundException?: any;
    encryptionKeyUnavailableException?: any;
    getMergeCommitOutput?: shared.GetMergeCommitOutput;
    invalidCommitException?: any;
    invalidConflictDetailLevelException?: any;
    invalidConflictResolutionStrategyException?: any;
    invalidRepositoryNameException?: any;
    repositoryDoesNotExistException?: any;
    repositoryNameRequiredException?: any;
    statusCode: number;
}
