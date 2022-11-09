import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateCommitXAmzTargetEnum {
    CodeCommit20150413CreateCommit = "CodeCommit_20150413.CreateCommit"
}


export class CreateCommitHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: CreateCommitXAmzTargetEnum;
}


export class CreateCommitRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateCommitHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateCommitInput;
}


export class CreateCommitResponse extends SpeakeasyBase {
  @Metadata()
  branchDoesNotExistException?: any;

  @Metadata()
  branchNameIsTagNameException?: any;

  @Metadata()
  branchNameRequiredException?: any;

  @Metadata()
  commitMessageLengthExceededException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createCommitOutput?: shared.CreateCommitOutput;

  @Metadata()
  directoryNameConflictsWithFileNameException?: any;

  @Metadata()
  encryptionIntegrityChecksFailedException?: any;

  @Metadata()
  encryptionKeyAccessDeniedException?: any;

  @Metadata()
  encryptionKeyDisabledException?: any;

  @Metadata()
  encryptionKeyNotFoundException?: any;

  @Metadata()
  encryptionKeyUnavailableException?: any;

  @Metadata()
  fileContentAndSourceFileSpecifiedException?: any;

  @Metadata()
  fileContentSizeLimitExceededException?: any;

  @Metadata()
  fileDoesNotExistException?: any;

  @Metadata()
  fileEntryRequiredException?: any;

  @Metadata()
  fileModeRequiredException?: any;

  @Metadata()
  fileNameConflictsWithDirectoryNameException?: any;

  @Metadata()
  filePathConflictsWithSubmodulePathException?: any;

  @Metadata()
  folderContentSizeLimitExceededException?: any;

  @Metadata()
  invalidBranchNameException?: any;

  @Metadata()
  invalidDeletionParameterException?: any;

  @Metadata()
  invalidEmailException?: any;

  @Metadata()
  invalidFileModeException?: any;

  @Metadata()
  invalidParentCommitIdException?: any;

  @Metadata()
  invalidPathException?: any;

  @Metadata()
  invalidRepositoryNameException?: any;

  @Metadata()
  maximumFileEntriesExceededException?: any;

  @Metadata()
  nameLengthExceededException?: any;

  @Metadata()
  noChangeException?: any;

  @Metadata()
  parentCommitDoesNotExistException?: any;

  @Metadata()
  parentCommitIdOutdatedException?: any;

  @Metadata()
  parentCommitIdRequiredException?: any;

  @Metadata()
  pathRequiredException?: any;

  @Metadata()
  putFileEntryConflictException?: any;

  @Metadata()
  repositoryDoesNotExistException?: any;

  @Metadata()
  repositoryNameRequiredException?: any;

  @Metadata()
  restrictedSourceFileException?: any;

  @Metadata()
  samePathRequestException?: any;

  @Metadata()
  sourceFileOrContentRequiredException?: any;

  @Metadata()
  statusCode: number;
}
