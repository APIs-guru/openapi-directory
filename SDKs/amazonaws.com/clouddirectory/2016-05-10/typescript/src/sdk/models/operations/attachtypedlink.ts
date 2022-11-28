import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AttachTypedLinkHeaders extends SpeakeasyBase {
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


// AttachTypedLinkRequestBodySourceObjectReference
/** 
 * The reference that identifies an object.
**/
export class AttachTypedLinkRequestBodySourceObjectReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Selector" })
  selector?: string;
}


// AttachTypedLinkRequestBodyTargetObjectReference
/** 
 * The reference that identifies an object.
**/
export class AttachTypedLinkRequestBodyTargetObjectReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Selector" })
  selector?: string;
}


// AttachTypedLinkRequestBodyTypedLinkFacet
/** 
 * Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link.
**/
export class AttachTypedLinkRequestBodyTypedLinkFacet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SchemaArn" })
  schemaArn?: string;

  @SpeakeasyMetadata({ data: "json, name=TypedLinkName" })
  typedLinkName?: string;
}


export class AttachTypedLinkRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attributes", elemType: shared.AttributeNameAndValue })
  attributes: shared.AttributeNameAndValue[];

  @SpeakeasyMetadata({ data: "json, name=SourceObjectReference" })
  sourceObjectReference: AttachTypedLinkRequestBodySourceObjectReference;

  @SpeakeasyMetadata({ data: "json, name=TargetObjectReference" })
  targetObjectReference: AttachTypedLinkRequestBodyTargetObjectReference;

  @SpeakeasyMetadata({ data: "json, name=TypedLinkFacet" })
  typedLinkFacet: AttachTypedLinkRequestBodyTypedLinkFacet;
}


export class AttachTypedLinkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: AttachTypedLinkHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: AttachTypedLinkRequestBody;
}


export class AttachTypedLinkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: shared.AccessDeniedException;

  @SpeakeasyMetadata()
  attachTypedLinkResponse?: shared.AttachTypedLinkResponse;

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
  invalidAttachmentException?: shared.InvalidAttachmentException;

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
