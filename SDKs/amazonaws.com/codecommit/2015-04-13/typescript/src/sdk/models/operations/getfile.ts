import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetFileXAmzTargetEnum {
    CodeCommit20150413GetFile = "CodeCommit_20150413.GetFile"
}


export class GetFileHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetFileXAmzTargetEnum;
}


export class GetFileRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetFileHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetFileInput;
}


export class GetFileResponse extends SpeakeasyBase {
  @Metadata()
  commitDoesNotExistException?: any;

  @Metadata()
  contentType: string;

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
  fileTooLargeException?: any;

  @Metadata()
  getFileOutput?: shared.GetFileOutput;

  @Metadata()
  invalidCommitException?: any;

  @Metadata()
  invalidPathException?: any;

  @Metadata()
  invalidRepositoryNameException?: any;

  @Metadata()
  pathRequiredException?: any;

  @Metadata()
  repositoryDoesNotExistException?: any;

  @Metadata()
  repositoryNameRequiredException?: any;

  @Metadata()
  statusCode: number;
}
