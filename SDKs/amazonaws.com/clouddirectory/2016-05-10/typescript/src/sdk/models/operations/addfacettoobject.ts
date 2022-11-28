import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddFacetToObjectHeaders extends SpeakeasyBase {
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


// AddFacetToObjectRequestBodyObjectReference
/** 
 * The reference that identifies an object.
**/
export class AddFacetToObjectRequestBodyObjectReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Selector" })
  selector?: string;
}


// AddFacetToObjectRequestBodySchemaFacet
/** 
 * A facet.
**/
export class AddFacetToObjectRequestBodySchemaFacet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FacetName" })
  facetName?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemaArn" })
  schemaArn?: string;
}


export class AddFacetToObjectRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ObjectAttributeList", elemType: shared.AttributeKeyAndValue })
  objectAttributeList?: shared.AttributeKeyAndValue[];

  @SpeakeasyMetadata({ data: "json, name=ObjectReference" })
  objectReference: AddFacetToObjectRequestBodyObjectReference;

  @SpeakeasyMetadata({ data: "json, name=SchemaFacet" })
  schemaFacet: AddFacetToObjectRequestBodySchemaFacet;
}


export class AddFacetToObjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: AddFacetToObjectHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: AddFacetToObjectRequestBody;
}


export class AddFacetToObjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: shared.AccessDeniedException;

  @SpeakeasyMetadata()
  addFacetToObjectResponse?: Map<string, any>;

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
  resourceNotFoundException?: shared.ResourceNotFoundException;

  @SpeakeasyMetadata()
  retryableConflictException?: shared.RetryableConflictException;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: shared.ValidationException;
}
