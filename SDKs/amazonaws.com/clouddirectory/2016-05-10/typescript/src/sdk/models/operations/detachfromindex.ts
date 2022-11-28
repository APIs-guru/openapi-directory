import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DetachFromIndexHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-data-partition" })
  xAmzDataPartition: string;
}


// DetachFromIndexRequestBodyIndexReference
/** 
 * The reference that identifies an object.
**/
export class DetachFromIndexRequestBodyIndexReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Selector" })
  selector?: string;
}


// DetachFromIndexRequestBodyTargetReference
/** 
 * The reference that identifies an object.
**/
export class DetachFromIndexRequestBodyTargetReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Selector" })
  selector?: string;
}


export class DetachFromIndexRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IndexReference" })
  indexReference: DetachFromIndexRequestBodyIndexReference;

  @SpeakeasyMetadata({ data: "json, name=TargetReference" })
  targetReference: DetachFromIndexRequestBodyTargetReference;
}


export class DetachFromIndexRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DetachFromIndexHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: DetachFromIndexRequestBody;
}


export class DetachFromIndexResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: shared.AccessDeniedException;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  detachFromIndexResponse?: shared.DetachFromIndexResponse;

  @SpeakeasyMetadata()
  directoryNotEnabledException?: shared.DirectoryNotEnabledException;

  @SpeakeasyMetadata()
  internalServiceException?: shared.InternalServiceException;

  @SpeakeasyMetadata()
  invalidArnException?: shared.InvalidArnException;

  @SpeakeasyMetadata()
  limitExceededException?: shared.LimitExceededException;

  @SpeakeasyMetadata()
  notIndexException?: shared.NotIndexException;

  @SpeakeasyMetadata()
  objectAlreadyDetachedException?: shared.ObjectAlreadyDetachedException;

  @SpeakeasyMetadata()
  resourceNotFoundException?: shared.ResourceNotFoundException;

  @SpeakeasyMetadata()
  retryableConflictException?: shared.RetryableConflictException;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: shared.ValidationException;
}
