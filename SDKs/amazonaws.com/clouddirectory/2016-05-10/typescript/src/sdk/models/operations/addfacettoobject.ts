import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddFacetToObjectHeaders extends SpeakeasyBase {
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


// AddFacetToObjectRequestBodyObjectReference
/** 
 * The reference that identifies an object.
**/
export class AddFacetToObjectRequestBodyObjectReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=Selector" })
  selector?: string;
}


// AddFacetToObjectRequestBodySchemaFacet
/** 
 * A facet.
**/
export class AddFacetToObjectRequestBodySchemaFacet extends SpeakeasyBase {
  @Metadata({ data: "json, name=FacetName" })
  facetName?: string;

  @Metadata({ data: "json, name=SchemaArn" })
  schemaArn?: string;
}


export class AddFacetToObjectRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ObjectAttributeList", elemType: shared.AttributeKeyAndValue })
  objectAttributeList?: shared.AttributeKeyAndValue[];

  @Metadata({ data: "json, name=ObjectReference" })
  objectReference: AddFacetToObjectRequestBodyObjectReference;

  @Metadata({ data: "json, name=SchemaFacet" })
  schemaFacet: AddFacetToObjectRequestBodySchemaFacet;
}


export class AddFacetToObjectRequest extends SpeakeasyBase {
  @Metadata()
  headers: AddFacetToObjectHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: AddFacetToObjectRequestBody;
}


export class AddFacetToObjectResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: shared.AccessDeniedException;

  @Metadata()
  addFacetToObjectResponse?: Map<string, any>;

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
  resourceNotFoundException?: shared.ResourceNotFoundException;

  @Metadata()
  retryableConflictException?: shared.RetryableConflictException;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: shared.ValidationException;
}
