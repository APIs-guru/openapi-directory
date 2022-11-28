import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutFileXAmzTargetEnum {
    CodeCommit20150413PutFile = "CodeCommit_20150413.PutFile"
}
export declare class PutFileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutFileXAmzTargetEnum;
}
export declare class PutFileRequest extends SpeakeasyBase {
    headers: PutFileHeaders;
    request: shared.PutFileInput;
}
export declare class PutFileResponse extends SpeakeasyBase {
    branchDoesNotExistException?: any;
    branchNameIsTagNameException?: any;
    branchNameRequiredException?: any;
    commitMessageLengthExceededException?: any;
    contentType: string;
    directoryNameConflictsWithFileNameException?: any;
    encryptionIntegrityChecksFailedException?: any;
    encryptionKeyAccessDeniedException?: any;
    encryptionKeyDisabledException?: any;
    encryptionKeyNotFoundException?: any;
    encryptionKeyUnavailableException?: any;
    fileContentRequiredException?: any;
    fileContentSizeLimitExceededException?: any;
    fileNameConflictsWithDirectoryNameException?: any;
    filePathConflictsWithSubmodulePathException?: any;
    folderContentSizeLimitExceededException?: any;
    invalidBranchNameException?: any;
    invalidDeletionParameterException?: any;
    invalidEmailException?: any;
    invalidFileModeException?: any;
    invalidParentCommitIdException?: any;
    invalidPathException?: any;
    invalidRepositoryNameException?: any;
    nameLengthExceededException?: any;
    parentCommitDoesNotExistException?: any;
    parentCommitIdOutdatedException?: any;
    parentCommitIdRequiredException?: any;
    pathRequiredException?: any;
    putFileOutput?: shared.PutFileOutput;
    repositoryDoesNotExistException?: any;
    repositoryNameRequiredException?: any;
    sameFileContentException?: any;
    statusCode: number;
}
