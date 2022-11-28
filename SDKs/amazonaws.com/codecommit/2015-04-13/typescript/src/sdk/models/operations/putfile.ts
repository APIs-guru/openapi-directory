import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PutFileXAmzTargetEnum {
    CodeCommit20150413PutFile = "CodeCommit_20150413.PutFile"
}


export class PutFileHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: PutFileXAmzTargetEnum;
}


export class PutFileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PutFileHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PutFileInput;
}


export class PutFileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  branchDoesNotExistException?: any;

  @SpeakeasyMetadata()
  branchNameIsTagNameException?: any;

  @SpeakeasyMetadata()
  branchNameRequiredException?: any;

  @SpeakeasyMetadata()
  commitMessageLengthExceededException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  directoryNameConflictsWithFileNameException?: any;

  @SpeakeasyMetadata()
  encryptionIntegrityChecksFailedException?: any;

  @SpeakeasyMetadata()
  encryptionKeyAccessDeniedException?: any;

  @SpeakeasyMetadata()
  encryptionKeyDisabledException?: any;

  @SpeakeasyMetadata()
  encryptionKeyNotFoundException?: any;

  @SpeakeasyMetadata()
  encryptionKeyUnavailableException?: any;

  @SpeakeasyMetadata()
  fileContentRequiredException?: any;

  @SpeakeasyMetadata()
  fileContentSizeLimitExceededException?: any;

  @SpeakeasyMetadata()
  fileNameConflictsWithDirectoryNameException?: any;

  @SpeakeasyMetadata()
  filePathConflictsWithSubmodulePathException?: any;

  @SpeakeasyMetadata()
  folderContentSizeLimitExceededException?: any;

  @SpeakeasyMetadata()
  invalidBranchNameException?: any;

  @SpeakeasyMetadata()
  invalidDeletionParameterException?: any;

  @SpeakeasyMetadata()
  invalidEmailException?: any;

  @SpeakeasyMetadata()
  invalidFileModeException?: any;

  @SpeakeasyMetadata()
  invalidParentCommitIdException?: any;

  @SpeakeasyMetadata()
  invalidPathException?: any;

  @SpeakeasyMetadata()
  invalidRepositoryNameException?: any;

  @SpeakeasyMetadata()
  nameLengthExceededException?: any;

  @SpeakeasyMetadata()
  parentCommitDoesNotExistException?: any;

  @SpeakeasyMetadata()
  parentCommitIdOutdatedException?: any;

  @SpeakeasyMetadata()
  parentCommitIdRequiredException?: any;

  @SpeakeasyMetadata()
  pathRequiredException?: any;

  @SpeakeasyMetadata()
  putFileOutput?: shared.PutFileOutput;

  @SpeakeasyMetadata()
  repositoryDoesNotExistException?: any;

  @SpeakeasyMetadata()
  repositoryNameRequiredException?: any;

  @SpeakeasyMetadata()
  sameFileContentException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
