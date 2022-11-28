import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateRepositoryDescriptionXAmzTargetEnum {
    CodeCommit20150413UpdateRepositoryDescription = "CodeCommit_20150413.UpdateRepositoryDescription"
}
export declare class UpdateRepositoryDescriptionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateRepositoryDescriptionXAmzTargetEnum;
}
export declare class UpdateRepositoryDescriptionRequest extends SpeakeasyBase {
    headers: UpdateRepositoryDescriptionHeaders;
    request: shared.UpdateRepositoryDescriptionInput;
}
export declare class UpdateRepositoryDescriptionResponse extends SpeakeasyBase {
    contentType: string;
    encryptionIntegrityChecksFailedException?: any;
    encryptionKeyAccessDeniedException?: any;
    encryptionKeyDisabledException?: any;
    encryptionKeyNotFoundException?: any;
    encryptionKeyUnavailableException?: any;
    invalidRepositoryDescriptionException?: any;
    invalidRepositoryNameException?: any;
    repositoryDoesNotExistException?: any;
    repositoryNameRequiredException?: any;
    statusCode: number;
}
