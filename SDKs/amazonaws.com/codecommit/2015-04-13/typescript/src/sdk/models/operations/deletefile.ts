import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteFileXAmzTargetEnum {
    CodeCommit20150413DeleteFile = "CodeCommit_20150413.DeleteFile"
}


export class DeleteFileHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteFileXAmzTargetEnum;
}


export class DeleteFileRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteFileHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteFileInput;
}


export class DeleteFileResponse extends SpeakeasyBase {
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
  deleteFileOutput?: shared.DeleteFileOutput;

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
  fileDoesNotExistException?: any;

  @Metadata()
  invalidBranchNameException?: any;

  @Metadata()
  invalidEmailException?: any;

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
  repositoryDoesNotExistException?: any;

  @Metadata()
  repositoryNameRequiredException?: any;

  @Metadata()
  statusCode: number;
}
