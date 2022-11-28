import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BatchGetCommitsXAmzTargetEnum {
    CodeCommit20150413BatchGetCommits = "CodeCommit_20150413.BatchGetCommits"
}
export declare class BatchGetCommitsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetCommitsXAmzTargetEnum;
}
export declare class BatchGetCommitsRequest extends SpeakeasyBase {
    headers: BatchGetCommitsHeaders;
    request: shared.BatchGetCommitsInput;
}
export declare class BatchGetCommitsResponse extends SpeakeasyBase {
    batchGetCommitsOutput?: shared.BatchGetCommitsOutput;
    commitIdsLimitExceededException?: any;
    commitIdsListRequiredException?: any;
    contentType: string;
    encryptionIntegrityChecksFailedException?: any;
    encryptionKeyAccessDeniedException?: any;
    encryptionKeyDisabledException?: any;
    encryptionKeyNotFoundException?: any;
    encryptionKeyUnavailableException?: any;
    invalidRepositoryNameException?: any;
    repositoryDoesNotExistException?: any;
    repositoryNameRequiredException?: any;
    statusCode: number;
}
