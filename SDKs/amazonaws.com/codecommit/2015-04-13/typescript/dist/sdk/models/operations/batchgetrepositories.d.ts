import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BatchGetRepositoriesXAmzTargetEnum {
    CodeCommit20150413BatchGetRepositories = "CodeCommit_20150413.BatchGetRepositories"
}
export declare class BatchGetRepositoriesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetRepositoriesXAmzTargetEnum;
}
export declare class BatchGetRepositoriesRequest extends SpeakeasyBase {
    headers: BatchGetRepositoriesHeaders;
    request: shared.BatchGetRepositoriesInput;
}
export declare class BatchGetRepositoriesResponse extends SpeakeasyBase {
    batchGetRepositoriesOutput?: shared.BatchGetRepositoriesOutput;
    contentType: string;
    encryptionIntegrityChecksFailedException?: any;
    encryptionKeyAccessDeniedException?: any;
    encryptionKeyDisabledException?: any;
    encryptionKeyNotFoundException?: any;
    encryptionKeyUnavailableException?: any;
    invalidRepositoryNameException?: any;
    maximumRepositoryNamesExceededException?: any;
    repositoryNamesRequiredException?: any;
    statusCode: number;
}
