import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AttachToIndexHeaders extends SpeakeasyBase {
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


// AttachToIndexRequestBodyIndexReference
/** 
 * The reference that identifies an object.
**/
export class AttachToIndexRequestBodyIndexReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Selector" })
  selector?: string;
}


// AttachToIndexRequestBodyTargetReference
/** 
 * The reference that identifies an object.
**/
export class AttachToIndexRequestBodyTargetReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Selector" })
  selector?: string;
}


export class AttachToIndexRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IndexReference" })
  indexReference: AttachToIndexRequestBodyIndexReference;

  @SpeakeasyMetadata({ data: "json, name=TargetReference" })
  targetReference: AttachToIndexRequestBodyTargetReference;
}


export class AttachToIndexRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: AttachToIndexHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: AttachToIndexRequestBody;
}


export class AttachToIndexResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  attachToIndexResponse?: shared.AttachToIndexResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  directoryNotEnabledException?: any;

  @SpeakeasyMetadata()
  indexedAttributeMissingException?: any;

  @SpeakeasyMetadata()
  internalServiceException?: any;

  @SpeakeasyMetadata()
  invalidArnException?: any;

  @SpeakeasyMetadata()
  invalidAttachmentException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  linkNameAlreadyInUseException?: any;

  @SpeakeasyMetadata()
  notIndexException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  retryableConflictException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: any;
}
