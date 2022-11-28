import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveFacetFromObjectHeaders extends SpeakeasyBase {
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


// RemoveFacetFromObjectRequestBodyObjectReference
/** 
 * The reference that identifies an object.
**/
export class RemoveFacetFromObjectRequestBodyObjectReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Selector" })
  selector?: string;
}


// RemoveFacetFromObjectRequestBodySchemaFacet
/** 
 * A facet.
**/
export class RemoveFacetFromObjectRequestBodySchemaFacet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FacetName" })
  facetName?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemaArn" })
  schemaArn?: string;
}


export class RemoveFacetFromObjectRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ObjectReference" })
  objectReference: RemoveFacetFromObjectRequestBodyObjectReference;

  @SpeakeasyMetadata({ data: "json, name=SchemaFacet" })
  schemaFacet: RemoveFacetFromObjectRequestBodySchemaFacet;
}


export class RemoveFacetFromObjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RemoveFacetFromObjectHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: RemoveFacetFromObjectRequestBody;
}


export class RemoveFacetFromObjectResponse extends SpeakeasyBase {
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
  removeFacetFromObjectResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  resourceNotFoundException?: shared.ResourceNotFoundException;

  @SpeakeasyMetadata()
  retryableConflictException?: shared.RetryableConflictException;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: shared.ValidationException;
}
