import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutFileXAmzTargetEnum {
    CodeCommit20150413PutFile = "CodeCommit_20150413.PutFile"
}


export class PutFileHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutFileXAmzTargetEnum;
}


export class PutFileRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutFileHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutFileInput;
}


export class PutFileResponse extends SpeakeasyBase {
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
  fileContentRequiredException?: any;

  @Metadata()
  fileContentSizeLimitExceededException?: any;

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
  nameLengthExceededException?: any;

  @Metadata()
  parentCommitDoesNotExistException?: any;

  @Metadata()
  parentCommitIdOutdatedException?: any;

  @Metadata()
  parentCommitIdRequiredException?: any;

  @Metadata()
  pathRequiredException?: any;

  @Metadata()
  putFileOutput?: shared.PutFileOutput;

  @Metadata()
  repositoryDoesNotExistException?: any;

  @Metadata()
  repositoryNameRequiredException?: any;

  @Metadata()
  sameFileContentException?: any;

  @Metadata()
  statusCode: number;
}
