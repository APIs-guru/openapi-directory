import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateObjectAttributesHeaders extends SpeakeasyBase {
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


// UpdateObjectAttributesRequestBodyObjectReference
/** 
 * The reference that identifies an object.
**/
export class UpdateObjectAttributesRequestBodyObjectReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=Selector" })
  selector?: string;
}


export class UpdateObjectAttributesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributeUpdates", elemType: shared.ObjectAttributeUpdate })
  attributeUpdates: shared.ObjectAttributeUpdate[];

  @Metadata({ data: "json, name=ObjectReference" })
  objectReference: UpdateObjectAttributesRequestBodyObjectReference;
}


export class UpdateObjectAttributesRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateObjectAttributesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateObjectAttributesRequestBody;
}


export class UpdateObjectAttributesResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: shared.AccessDeniedException;

  @Metadata()
  contentType: string;

  @Metadata()
  directoryNotEnabledException?: shared.DirectoryNotEnabledException;

  @Metadata()
  facetValidationException?: shared.FacetValidationException;

  @Metadata()
  internalServiceException?: shared.InternalServiceException;

  @Metadata()
  invalidArnException?: shared.InvalidArnException;

  @Metadata()
  limitExceededException?: shared.LimitExceededException;

  @Metadata()
  linkNameAlreadyInUseException?: shared.LinkNameAlreadyInUseException;

  @Metadata()
  resourceNotFoundException?: shared.ResourceNotFoundException;

  @Metadata()
  retryableConflictException?: shared.RetryableConflictException;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateObjectAttributesResponse?: shared.UpdateObjectAttributesResponse;

  @Metadata()
  validationException?: shared.ValidationException;
}
