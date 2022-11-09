import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AttachToIndexHeaders extends SpeakeasyBase {
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


// AttachToIndexRequestBodyIndexReference
/** 
 * The reference that identifies an object.
**/
export class AttachToIndexRequestBodyIndexReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=Selector" })
  selector?: string;
}


// AttachToIndexRequestBodyTargetReference
/** 
 * The reference that identifies an object.
**/
export class AttachToIndexRequestBodyTargetReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=Selector" })
  selector?: string;
}


export class AttachToIndexRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=IndexReference" })
  indexReference: AttachToIndexRequestBodyIndexReference;

  @Metadata({ data: "json, name=TargetReference" })
  targetReference: AttachToIndexRequestBodyTargetReference;
}


export class AttachToIndexRequest extends SpeakeasyBase {
  @Metadata()
  headers: AttachToIndexHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: AttachToIndexRequestBody;
}


export class AttachToIndexResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: shared.AccessDeniedException;

  @Metadata()
  attachToIndexResponse?: shared.AttachToIndexResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  directoryNotEnabledException?: shared.DirectoryNotEnabledException;

  @Metadata()
  indexedAttributeMissingException?: shared.IndexedAttributeMissingException;

  @Metadata()
  internalServiceException?: shared.InternalServiceException;

  @Metadata()
  invalidArnException?: shared.InvalidArnException;

  @Metadata()
  invalidAttachmentException?: shared.InvalidAttachmentException;

  @Metadata()
  limitExceededException?: shared.LimitExceededException;

  @Metadata()
  linkNameAlreadyInUseException?: shared.LinkNameAlreadyInUseException;

  @Metadata()
  notIndexException?: shared.NotIndexException;

  @Metadata()
  resourceNotFoundException?: shared.ResourceNotFoundException;

  @Metadata()
  retryableConflictException?: shared.RetryableConflictException;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: shared.ValidationException;
}
