import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RemoveFacetFromObjectHeaders extends SpeakeasyBase {
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


// RemoveFacetFromObjectRequestBodyObjectReference
/** 
 * The reference that identifies an object.
**/
export class RemoveFacetFromObjectRequestBodyObjectReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=Selector" })
  selector?: string;
}


// RemoveFacetFromObjectRequestBodySchemaFacet
/** 
 * A facet.
**/
export class RemoveFacetFromObjectRequestBodySchemaFacet extends SpeakeasyBase {
  @Metadata({ data: "json, name=FacetName" })
  facetName?: string;

  @Metadata({ data: "json, name=SchemaArn" })
  schemaArn?: string;
}


export class RemoveFacetFromObjectRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ObjectReference" })
  objectReference: RemoveFacetFromObjectRequestBodyObjectReference;

  @Metadata({ data: "json, name=SchemaFacet" })
  schemaFacet: RemoveFacetFromObjectRequestBodySchemaFacet;
}


export class RemoveFacetFromObjectRequest extends SpeakeasyBase {
  @Metadata()
  headers: RemoveFacetFromObjectHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: RemoveFacetFromObjectRequestBody;
}


export class RemoveFacetFromObjectResponse extends SpeakeasyBase {
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
  removeFacetFromObjectResponse?: Map<string, any>;

  @Metadata()
  resourceNotFoundException?: shared.ResourceNotFoundException;

  @Metadata()
  retryableConflictException?: shared.RetryableConflictException;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: shared.ValidationException;
}
