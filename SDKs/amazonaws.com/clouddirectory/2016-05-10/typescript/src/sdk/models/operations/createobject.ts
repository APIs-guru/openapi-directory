import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateObjectHeaders extends SpeakeasyBase {
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


// CreateObjectRequestBodyParentReference
/** 
 * The reference that identifies an object.
**/
export class CreateObjectRequestBodyParentReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Selector" })
  selector?: string;
}


export class CreateObjectRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LinkName" })
  linkName?: string;

  @SpeakeasyMetadata({ data: "json, name=ObjectAttributeList", elemType: shared.AttributeKeyAndValue })
  objectAttributeList?: shared.AttributeKeyAndValue[];

  @SpeakeasyMetadata({ data: "json, name=ParentReference" })
  parentReference?: CreateObjectRequestBodyParentReference;

  @SpeakeasyMetadata({ data: "json, name=SchemaFacets", elemType: shared.SchemaFacet })
  schemaFacets: shared.SchemaFacet[];
}


export class CreateObjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateObjectHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateObjectRequestBody;
}


export class CreateObjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: shared.AccessDeniedException;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createObjectResponse?: shared.CreateObjectResponse;

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
  unsupportedIndexTypeException?: shared.UnsupportedIndexTypeException;

  @SpeakeasyMetadata()
  validationException?: shared.ValidationException;
}
