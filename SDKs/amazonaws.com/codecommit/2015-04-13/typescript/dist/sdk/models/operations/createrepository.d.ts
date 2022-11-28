import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateRepositoryXAmzTargetEnum {
    CodeCommit20150413CreateRepository = "CodeCommit_20150413.CreateRepository"
}
export declare class CreateRepositoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateRepositoryXAmzTargetEnum;
}
export declare class CreateRepositoryRequest extends SpeakeasyBase {
    headers: CreateRepositoryHeaders;
    request: shared.CreateRepositoryInput;
}
export declare class CreateRepositoryResponse extends SpeakeasyBase {
    contentType: string;
    createRepositoryOutput?: shared.CreateRepositoryOutput;
    encryptionIntegrityChecksFailedException?: any;
    encryptionKeyAccessDeniedException?: any;
    encryptionKeyDisabledException?: any;
    encryptionKeyNotFoundException?: any;
    encryptionKeyUnavailableException?: any;
    invalidRepositoryDescriptionException?: any;
    invalidRepositoryNameException?: any;
    invalidSystemTagUsageException?: any;
    invalidTagsMapException?: any;
    repositoryLimitExceededException?: any;
    repositoryNameExistsException?: any;
    repositoryNameRequiredException?: any;
    statusCode: number;
    tagPolicyException?: any;
    tooManyTagsException?: any;
}
