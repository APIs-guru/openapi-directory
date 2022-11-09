import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetObjectAttributesXAmzConsistencyLevelEnum {
    Serializable = "SERIALIZABLE"
,    Eventual = "EVENTUAL"
}


export class GetObjectAttributesHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=x-amz-consistency-level" })
  xAmzConsistencyLevel?: GetObjectAttributesXAmzConsistencyLevelEnum;

  @Metadata({ data: "header, style=simple;explode=false;name=x-amz-data-partition" })
  xAmzDataPartition: string;
}


// GetObjectAttributesRequestBodyObjectReference
/** 
 * The reference that identifies an object.
**/
export class GetObjectAttributesRequestBodyObjectReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=Selector" })
  selector?: string;
}


// GetObjectAttributesRequestBodySchemaFacet
/** 
 * A facet.
**/
export class GetObjectAttributesRequestBodySchemaFacet extends SpeakeasyBase {
  @Metadata({ data: "json, name=FacetName" })
  facetName?: string;

  @Metadata({ data: "json, name=SchemaArn" })
  schemaArn?: string;
}


export class GetObjectAttributesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributeNames" })
  attributeNames: string[];

  @Metadata({ data: "json, name=ObjectReference" })
  objectReference: GetObjectAttributesRequestBodyObjectReference;

  @Metadata({ data: "json, name=SchemaFacet" })
  schemaFacet: GetObjectAttributesRequestBodySchemaFacet;
}


export class GetObjectAttributesRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetObjectAttributesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: GetObjectAttributesRequestBody;
}


export class GetObjectAttributesResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: shared.AccessDeniedException;

  @Metadata()
  contentType: string;

  @Metadata()
  directoryNotEnabledException?: shared.DirectoryNotEnabledException;

  @Metadata()
  facetValidationException?: shared.FacetValidationException;

  @Metadata()
  getObjectAttributesResponse?: shared.GetObjectAttributesResponse;

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
