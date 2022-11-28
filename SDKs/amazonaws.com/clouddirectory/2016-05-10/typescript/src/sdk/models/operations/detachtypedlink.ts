import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DetachTypedLinkHeaders extends SpeakeasyBase {
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


// DetachTypedLinkRequestBodyTypedLinkSpecifier
/** 
 * Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.
**/
export class DetachTypedLinkRequestBodyTypedLinkSpecifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IdentityAttributeValues", elemType: shared.AttributeNameAndValue })
  identityAttributeValues?: shared.AttributeNameAndValue[];

  @SpeakeasyMetadata({ data: "json, name=SourceObjectReference" })
  sourceObjectReference?: shared.ObjectReference;

  @SpeakeasyMetadata({ data: "json, name=TargetObjectReference" })
  targetObjectReference?: shared.ObjectReference;

  @SpeakeasyMetadata({ data: "json, name=TypedLinkFacet" })
  typedLinkFacet?: shared.TypedLinkSchemaAndFacetName;
}


export class DetachTypedLinkRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TypedLinkSpecifier" })
  typedLinkSpecifier: DetachTypedLinkRequestBodyTypedLinkSpecifier;
}


export class DetachTypedLinkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DetachTypedLinkHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: DetachTypedLinkRequestBody;
}


export class DetachTypedLinkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: shared.AccessDeniedException;

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
