import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateTypedLinkFacetHeaders extends SpeakeasyBase {
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


// CreateTypedLinkFacetRequestBodyFacet
/** 
 * Defines the typed links structure and its attributes. To create a typed link facet, use the <a>CreateTypedLinkFacet</a> API.
**/
export class CreateTypedLinkFacetRequestBodyFacet extends SpeakeasyBase {
  @Metadata({ data: "json, name=Attributes", elemType: shared.TypedLinkAttributeDefinition })
  attributes?: shared.TypedLinkAttributeDefinition[];

  @Metadata({ data: "json, name=IdentityAttributeOrder" })
  identityAttributeOrder?: string[];

  @Metadata({ data: "json, name=Name" })
  name?: string;
}


export class CreateTypedLinkFacetRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Facet" })
  facet: CreateTypedLinkFacetRequestBodyFacet;
}


export class CreateTypedLinkFacetRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateTypedLinkFacetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateTypedLinkFacetRequestBody;
}


export class CreateTypedLinkFacetResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createTypedLinkFacetResponse?: Map<string, any>;

  @Metadata()
  facetAlreadyExistsException?: any;

  @Metadata()
  facetValidationException?: any;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidArnException?: any;

  @Metadata()
  invalidRuleException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  retryableConflictException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
