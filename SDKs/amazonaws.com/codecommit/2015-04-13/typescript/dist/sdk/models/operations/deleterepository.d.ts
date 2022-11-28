import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteRepositoryXAmzTargetEnum {
    CodeCommit20150413DeleteRepository = "CodeCommit_20150413.DeleteRepository"
}
export declare class DeleteRepositoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteRepositoryXAmzTargetEnum;
}
export declare class DeleteRepositoryRequest extends SpeakeasyBase {
    headers: DeleteRepositoryHeaders;
    request: shared.DeleteRepositoryInput;
}
export declare class DeleteRepositoryResponse extends SpeakeasyBase {
    contentType: string;
    deleteRepositoryOutput?: shared.DeleteRepositoryOutput;
    encryptionIntegrityChecksFailedException?: any;
    encryptionKeyAccessDeniedException?: any;
    encryptionKeyDisabledException?: any;
    encryptionKeyNotFoundException?: any;
    encryptionKeyUnavailableException?: any;
    invalidRepositoryNameException?: any;
    repositoryNameRequiredException?: any;
    statusCode: number;
}
