import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateTypedLinkFacetHeaders extends SpeakeasyBase {
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


export class UpdateTypedLinkFacetRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributeUpdates", elemType: shared.TypedLinkFacetAttributeUpdate })
  attributeUpdates: shared.TypedLinkFacetAttributeUpdate[];

  @Metadata({ data: "json, name=IdentityAttributeOrder" })
  identityAttributeOrder: string[];

  @Metadata({ data: "json, name=Name" })
  name: string;
}


export class UpdateTypedLinkFacetRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateTypedLinkFacetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateTypedLinkFacetRequestBody;
}


export class UpdateTypedLinkFacetResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  facetNotFoundException?: any;

  @Metadata()
  facetValidationException?: any;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidArnException?: any;

  @Metadata()
  invalidFacetUpdateException?: any;

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
  updateTypedLinkFacetResponse?: Map<string, any>;

  @Metadata()
  validationException?: any;
}
