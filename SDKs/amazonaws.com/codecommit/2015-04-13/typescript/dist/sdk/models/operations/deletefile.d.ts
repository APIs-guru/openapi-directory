import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteFileXAmzTargetEnum {
    CodeCommit20150413DeleteFile = "CodeCommit_20150413.DeleteFile"
}
export declare class DeleteFileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteFileXAmzTargetEnum;
}
export declare class DeleteFileRequest extends SpeakeasyBase {
    headers: DeleteFileHeaders;
    request: shared.DeleteFileInput;
}
export declare class DeleteFileResponse extends SpeakeasyBase {
    branchDoesNotExistException?: any;
    branchNameIsTagNameException?: any;
    branchNameRequiredException?: any;
    commitMessageLengthExceededException?: any;
    contentType: string;
    deleteFileOutput?: shared.DeleteFileOutput;
    encryptionIntegrityChecksFailedException?: any;
    encryptionKeyAccessDeniedException?: any;
    encryptionKeyDisabledException?: any;
    encryptionKeyNotFoundException?: any;
    encryptionKeyUnavailableException?: any;
    fileDoesNotExistException?: any;
    invalidBranchNameException?: any;
    invalidEmailException?: any;
    invalidParentCommitIdException?: any;
    invalidPathException?: any;
    invalidRepositoryNameException?: any;
    nameLengthExceededException?: any;
    parentCommitDoesNotExistException?: any;
    parentCommitIdOutdatedException?: any;
    parentCommitIdRequiredException?: any;
    pathRequiredException?: any;
    repositoryDoesNotExistException?: any;
    repositoryNameRequiredException?: any;
    statusCode: number;
}
