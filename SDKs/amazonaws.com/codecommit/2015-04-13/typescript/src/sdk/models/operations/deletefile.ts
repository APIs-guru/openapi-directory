import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DeleteFileXAmzTargetEnum {
    CodeCommit20150413DeleteFile = "CodeCommit_20150413.DeleteFile"
}


export class DeleteFileHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteFileXAmzTargetEnum;
}


export class DeleteFileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DeleteFileHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DeleteFileInput;
}


export class DeleteFileResponse extends SpeakeasyBase {
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
  deleteFileOutput?: shared.DeleteFileOutput;

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
  fileDoesNotExistException?: any;

  @SpeakeasyMetadata()
  invalidBranchNameException?: any;

  @SpeakeasyMetadata()
  invalidEmailException?: any;

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
  repositoryDoesNotExistException?: any;

  @SpeakeasyMetadata()
  repositoryNameRequiredException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
