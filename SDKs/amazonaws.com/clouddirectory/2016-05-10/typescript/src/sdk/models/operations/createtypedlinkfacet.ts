import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateTypedLinkFacetHeaders extends SpeakeasyBase {
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


// CreateTypedLinkFacetRequestBodyFacet
/** 
 * Defines the typed links structure and its attributes. To create a typed link facet, use the <a>CreateTypedLinkFacet</a> API.
**/
export class CreateTypedLinkFacetRequestBodyFacet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attributes", elemType: shared.TypedLinkAttributeDefinition })
  attributes?: shared.TypedLinkAttributeDefinition[];

  @SpeakeasyMetadata({ data: "json, name=IdentityAttributeOrder" })
  identityAttributeOrder?: string[];

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}


export class CreateTypedLinkFacetRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Facet" })
  facet: CreateTypedLinkFacetRequestBodyFacet;
}


export class CreateTypedLinkFacetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateTypedLinkFacetHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateTypedLinkFacetRequestBody;
}


export class CreateTypedLinkFacetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: shared.AccessDeniedException;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createTypedLinkFacetResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  facetAlreadyExistsException?: shared.FacetAlreadyExistsException;

  @SpeakeasyMetadata()
  facetValidationException?: shared.FacetValidationException;

  @SpeakeasyMetadata()
  internalServiceException?: shared.InternalServiceException;

  @SpeakeasyMetadata()
  invalidArnException?: shared.InvalidArnException;

  @SpeakeasyMetadata()
  invalidRuleException?: shared.InvalidRuleException;

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
