import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateObjectAttributesHeaders extends SpeakeasyBase {
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


// UpdateObjectAttributesRequestBodyObjectReference
/** 
 * The reference that identifies an object.
**/
export class UpdateObjectAttributesRequestBodyObjectReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Selector" })
  selector?: string;
}


export class UpdateObjectAttributesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributeUpdates", elemType: shared.ObjectAttributeUpdate })
  attributeUpdates: shared.ObjectAttributeUpdate[];

  @SpeakeasyMetadata({ data: "json, name=ObjectReference" })
  objectReference: UpdateObjectAttributesRequestBodyObjectReference;
}


export class UpdateObjectAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateObjectAttributesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateObjectAttributesRequestBody;
}


export class UpdateObjectAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: shared.AccessDeniedException;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  directoryNotEnabledException?: shared.DirectoryNotEnabledException;

  @SpeakeasyMetadata()
  facetValidationException?: shared.FacetValidationException;

  @SpeakeasyMetadata()
  internalServiceException?: shared.InternalServiceException;

  @SpeakeasyMetadata()
  invalidArnException?: shared.InvalidArnException;

  @SpeakeasyMetadata()
  limitExceededException?: shared.LimitExceededException;

  @SpeakeasyMetadata()
  linkNameAlreadyInUseException?: shared.LinkNameAlreadyInUseException;

  @SpeakeasyMetadata()
  resourceNotFoundException?: shared.ResourceNotFoundException;

  @SpeakeasyMetadata()
  retryableConflictException?: shared.RetryableConflictException;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateObjectAttributesResponse?: shared.UpdateObjectAttributesResponse;

  @SpeakeasyMetadata()
  validationException?: shared.ValidationException;
}
