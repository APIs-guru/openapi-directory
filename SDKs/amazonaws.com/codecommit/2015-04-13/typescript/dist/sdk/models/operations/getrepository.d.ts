import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetRepositoryXAmzTargetEnum {
    CodeCommit20150413GetRepository = "CodeCommit_20150413.GetRepository"
}
export declare class GetRepositoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRepositoryXAmzTargetEnum;
}
export declare class GetRepositoryRequest extends SpeakeasyBase {
    headers: GetRepositoryHeaders;
    request: shared.GetRepositoryInput;
}
export declare class GetRepositoryResponse extends SpeakeasyBase {
    contentType: string;
    encryptionIntegrityChecksFailedException?: any;
    encryptionKeyAccessDeniedException?: any;
    encryptionKeyDisabledException?: any;
    encryptionKeyNotFoundException?: any;
    encryptionKeyUnavailableException?: any;
    getRepositoryOutput?: shared.GetRepositoryOutput;
    invalidRepositoryNameException?: any;
    repositoryDoesNotExistException?: any;
    repositoryNameRequiredException?: any;
    statusCode: number;
}
