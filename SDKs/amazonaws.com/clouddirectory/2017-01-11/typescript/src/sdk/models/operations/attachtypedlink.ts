import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AttachTypedLinkHeaders extends SpeakeasyBase {
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


// AttachTypedLinkRequestBodySourceObjectReference
/** 
 * The reference that identifies an object.
**/
export class AttachTypedLinkRequestBodySourceObjectReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=Selector" })
  selector?: string;
}


// AttachTypedLinkRequestBodyTargetObjectReference
/** 
 * The reference that identifies an object.
**/
export class AttachTypedLinkRequestBodyTargetObjectReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=Selector" })
  selector?: string;
}


// AttachTypedLinkRequestBodyTypedLinkFacet
/** 
 * Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link.
**/
export class AttachTypedLinkRequestBodyTypedLinkFacet extends SpeakeasyBase {
  @Metadata({ data: "json, name=SchemaArn" })
  schemaArn?: string;

  @Metadata({ data: "json, name=TypedLinkName" })
  typedLinkName?: string;
}


export class AttachTypedLinkRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Attributes", elemType: shared.AttributeNameAndValue })
  attributes: shared.AttributeNameAndValue[];

  @Metadata({ data: "json, name=SourceObjectReference" })
  sourceObjectReference: AttachTypedLinkRequestBodySourceObjectReference;

  @Metadata({ data: "json, name=TargetObjectReference" })
  targetObjectReference: AttachTypedLinkRequestBodyTargetObjectReference;

  @Metadata({ data: "json, name=TypedLinkFacet" })
  typedLinkFacet: AttachTypedLinkRequestBodyTypedLinkFacet;
}


export class AttachTypedLinkRequest extends SpeakeasyBase {
  @Metadata()
  headers: AttachTypedLinkHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: AttachTypedLinkRequestBody;
}


export class AttachTypedLinkResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  attachTypedLinkResponse?: shared.AttachTypedLinkResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  directoryNotEnabledException?: any;

  @Metadata()
  facetValidationException?: any;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidArnException?: any;

  @Metadata()
  invalidAttachmentException?: any;

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
