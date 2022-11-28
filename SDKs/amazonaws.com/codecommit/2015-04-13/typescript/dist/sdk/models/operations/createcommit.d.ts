import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateCommitXAmzTargetEnum {
    CodeCommit20150413CreateCommit = "CodeCommit_20150413.CreateCommit"
}
export declare class CreateCommitHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateCommitXAmzTargetEnum;
}
export declare class CreateCommitRequest extends SpeakeasyBase {
    headers: CreateCommitHeaders;
    request: shared.CreateCommitInput;
}
export declare class CreateCommitResponse extends SpeakeasyBase {
    branchDoesNotExistException?: any;
    branchNameIsTagNameException?: any;
    branchNameRequiredException?: any;
    commitMessageLengthExceededException?: any;
    contentType: string;
    createCommitOutput?: shared.CreateCommitOutput;
    directoryNameConflictsWithFileNameException?: any;
    encryptionIntegrityChecksFailedException?: any;
    encryptionKeyAccessDeniedException?: any;
    encryptionKeyDisabledException?: any;
    encryptionKeyNotFoundException?: any;
    encryptionKeyUnavailableException?: any;
    fileContentAndSourceFileSpecifiedException?: any;
    fileContentSizeLimitExceededException?: any;
    fileDoesNotExistException?: any;
    fileEntryRequiredException?: any;
    fileModeRequiredException?: any;
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
    maximumFileEntriesExceededException?: any;
    nameLengthExceededException?: any;
    noChangeException?: any;
    parentCommitDoesNotExistException?: any;
    parentCommitIdOutdatedException?: any;
    parentCommitIdRequiredException?: any;
    pathRequiredException?: any;
    putFileEntryConflictException?: any;
    repositoryDoesNotExistException?: any;
    repositoryNameRequiredException?: any;
    restrictedSourceFileException?: any;
    samePathRequestException?: any;
    sourceFileOrContentRequiredException?: any;
    statusCode: number;
}
