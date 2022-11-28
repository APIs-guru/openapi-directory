import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateLinkAttributesHeaders extends SpeakeasyBase {
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


// UpdateLinkAttributesRequestBodyTypedLinkSpecifier
/** 
 * Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.
**/
export class UpdateLinkAttributesRequestBodyTypedLinkSpecifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IdentityAttributeValues", elemType: shared.AttributeNameAndValue })
  identityAttributeValues?: shared.AttributeNameAndValue[];

  @SpeakeasyMetadata({ data: "json, name=SourceObjectReference" })
  sourceObjectReference?: shared.ObjectReference;

  @SpeakeasyMetadata({ data: "json, name=TargetObjectReference" })
  targetObjectReference?: shared.ObjectReference;

  @SpeakeasyMetadata({ data: "json, name=TypedLinkFacet" })
  typedLinkFacet?: shared.TypedLinkSchemaAndFacetName;
}


export class UpdateLinkAttributesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributeUpdates", elemType: shared.LinkAttributeUpdate })
  attributeUpdates: shared.LinkAttributeUpdate[];

  @SpeakeasyMetadata({ data: "json, name=TypedLinkSpecifier" })
  typedLinkSpecifier: UpdateLinkAttributesRequestBodyTypedLinkSpecifier;
}


export class UpdateLinkAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateLinkAttributesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateLinkAttributesRequestBody;
}


export class UpdateLinkAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  directoryNotEnabledException?: any;

  @SpeakeasyMetadata()
  facetValidationException?: any;

  @SpeakeasyMetadata()
  internalServiceException?: any;

  @SpeakeasyMetadata()
  invalidArnException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  retryableConflictException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateLinkAttributesResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  validationException?: any;
}
