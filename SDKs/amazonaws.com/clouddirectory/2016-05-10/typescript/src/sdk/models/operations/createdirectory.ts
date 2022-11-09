import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateDirectoryHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=x-amz-data-partition" })
  xAmzDataPartition: string;
}


export class CreateDirectoryRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;
}


export class CreateDirectoryRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateDirectoryHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateDirectoryRequestBody;
}


export class CreateDirectoryResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: shared.AccessDeniedException;

  @Metadata()
  contentType: string;

  @Metadata()
  createDirectoryResponse?: shared.CreateDirectoryResponse;

  @Metadata()
  directoryAlreadyExistsException?: shared.DirectoryAlreadyExistsException;

  @Metadata()
  internalServiceException?: shared.InternalServiceException;

  @Metadata()
  invalidArnException?: shared.InvalidArnException;

  @Metadata()
  limitExceededException?: shared.LimitExceededException;

  @Metadata()
  resourceNotFoundException?: shared.ResourceNotFoundException;

  @Metadata()
  retryableConflictException?: shared.RetryableConflictException;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: shared.ValidationException;
}
