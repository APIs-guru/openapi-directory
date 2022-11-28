import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateTypedLinkFacetHeaders extends SpeakeasyBase {
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


export class UpdateTypedLinkFacetRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributeUpdates", elemType: shared.TypedLinkFacetAttributeUpdate })
  attributeUpdates: shared.TypedLinkFacetAttributeUpdate[];

  @SpeakeasyMetadata({ data: "json, name=IdentityAttributeOrder" })
  identityAttributeOrder: string[];

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


export class UpdateTypedLinkFacetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateTypedLinkFacetHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateTypedLinkFacetRequestBody;
}


export class UpdateTypedLinkFacetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: shared.AccessDeniedException;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  facetNotFoundException?: shared.FacetNotFoundException;

  @SpeakeasyMetadata()
  facetValidationException?: shared.FacetValidationException;

  @SpeakeasyMetadata()
  internalServiceException?: shared.InternalServiceException;

  @SpeakeasyMetadata()
  invalidArnException?: shared.InvalidArnException;

  @SpeakeasyMetadata()
  invalidFacetUpdateException?: shared.InvalidFacetUpdateException;

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
  updateTypedLinkFacetResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  validationException?: shared.ValidationException;
}
