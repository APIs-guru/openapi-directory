import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteObjectHeaders extends SpeakeasyBase {
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


// DeleteObjectRequestBodyObjectReference
/** 
 * The reference that identifies an object.
**/
export class DeleteObjectRequestBodyObjectReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Selector" })
  selector?: string;
}


export class DeleteObjectRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ObjectReference" })
  objectReference: DeleteObjectRequestBodyObjectReference;
}


export class DeleteObjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DeleteObjectHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: DeleteObjectRequestBody;
}


export class DeleteObjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: shared.AccessDeniedException;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteObjectResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  directoryNotEnabledException?: shared.DirectoryNotEnabledException;

  @SpeakeasyMetadata()
  internalServiceException?: shared.InternalServiceException;

  @SpeakeasyMetadata()
  invalidArnException?: shared.InvalidArnException;

  @SpeakeasyMetadata()
  limitExceededException?: shared.LimitExceededException;

  @SpeakeasyMetadata()
  objectNotDetachedException?: shared.ObjectNotDetachedException;

  @SpeakeasyMetadata()
  resourceNotFoundException?: shared.ResourceNotFoundException;

  @SpeakeasyMetadata()
  retryableConflictException?: shared.RetryableConflictException;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: shared.ValidationException;
}
