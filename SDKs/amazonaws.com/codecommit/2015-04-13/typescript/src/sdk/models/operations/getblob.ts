import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetBlobXAmzTargetEnum {
    CodeCommit20150413GetBlob = "CodeCommit_20150413.GetBlob"
}


export class GetBlobHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetBlobXAmzTargetEnum;
}


export class GetBlobRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetBlobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetBlobInput;
}


export class GetBlobResponse extends SpeakeasyBase {
  @Metadata()
  blobIdDoesNotExistException?: any;

  @Metadata()
  blobIdRequiredException?: any;

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
  fileTooLargeException?: any;

  @Metadata()
  getBlobOutput?: shared.GetBlobOutput;

  @Metadata()
  invalidBlobIdException?: any;

  @Metadata()
  invalidRepositoryNameException?: any;

  @Metadata()
  repositoryDoesNotExistException?: any;

  @Metadata()
  repositoryNameRequiredException?: any;

  @Metadata()
  statusCode: number;
}
