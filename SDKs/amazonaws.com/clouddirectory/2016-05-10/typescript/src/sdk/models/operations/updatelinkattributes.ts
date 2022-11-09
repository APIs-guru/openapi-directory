import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateLinkAttributesHeaders extends SpeakeasyBase {
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


// UpdateLinkAttributesRequestBodyTypedLinkSpecifier
/** 
 * Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.
**/
export class UpdateLinkAttributesRequestBodyTypedLinkSpecifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=IdentityAttributeValues", elemType: shared.AttributeNameAndValue })
  identityAttributeValues?: shared.AttributeNameAndValue[];

  @Metadata({ data: "json, name=SourceObjectReference" })
  sourceObjectReference?: shared.ObjectReference;

  @Metadata({ data: "json, name=TargetObjectReference" })
  targetObjectReference?: shared.ObjectReference;

  @Metadata({ data: "json, name=TypedLinkFacet" })
  typedLinkFacet?: shared.TypedLinkSchemaAndFacetName;
}


export class UpdateLinkAttributesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributeUpdates", elemType: shared.LinkAttributeUpdate })
  attributeUpdates: shared.LinkAttributeUpdate[];

  @Metadata({ data: "json, name=TypedLinkSpecifier" })
  typedLinkSpecifier: UpdateLinkAttributesRequestBodyTypedLinkSpecifier;
}


export class UpdateLinkAttributesRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateLinkAttributesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateLinkAttributesRequestBody;
}


export class UpdateLinkAttributesResponse extends SpeakeasyBase {
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
  resourceNotFoundException?: shared.ResourceNotFoundException;

  @Metadata()
  retryableConflictException?: shared.RetryableConflictException;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateLinkAttributesResponse?: Map<string, any>;

  @Metadata()
  validationException?: shared.ValidationException;
}
