import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AttachObjectHeaders extends SpeakeasyBase {
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


// AttachObjectRequestBodyChildReference
/** 
 * The reference that identifies an object.
**/
export class AttachObjectRequestBodyChildReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=Selector" })
  selector?: string;
}


// AttachObjectRequestBodyParentReference
/** 
 * The reference that identifies an object.
**/
export class AttachObjectRequestBodyParentReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=Selector" })
  selector?: string;
}


export class AttachObjectRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChildReference" })
  childReference: AttachObjectRequestBodyChildReference;

  @Metadata({ data: "json, name=LinkName" })
  linkName: string;

  @Metadata({ data: "json, name=ParentReference" })
  parentReference: AttachObjectRequestBodyParentReference;
}


export class AttachObjectRequest extends SpeakeasyBase {
  @Metadata()
  headers: AttachObjectHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: AttachObjectRequestBody;
}


export class AttachObjectResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  attachObjectResponse?: shared.AttachObjectResponse;

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
  linkNameAlreadyInUseException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  retryableConflictException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
