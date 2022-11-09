import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DetachFromIndexHeaders extends SpeakeasyBase {
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


// DetachFromIndexRequestBodyIndexReference
/** 
 * The reference that identifies an object.
**/
export class DetachFromIndexRequestBodyIndexReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=Selector" })
  selector?: string;
}


// DetachFromIndexRequestBodyTargetReference
/** 
 * The reference that identifies an object.
**/
export class DetachFromIndexRequestBodyTargetReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=Selector" })
  selector?: string;
}


export class DetachFromIndexRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=IndexReference" })
  indexReference: DetachFromIndexRequestBodyIndexReference;

  @Metadata({ data: "json, name=TargetReference" })
  targetReference: DetachFromIndexRequestBodyTargetReference;
}


export class DetachFromIndexRequest extends SpeakeasyBase {
  @Metadata()
  headers: DetachFromIndexHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: DetachFromIndexRequestBody;
}


export class DetachFromIndexResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  detachFromIndexResponse?: shared.DetachFromIndexResponse;

  @Metadata()
  directoryNotEnabledException?: any;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidArnException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  notIndexException?: any;

  @Metadata()
  objectAlreadyDetachedException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  retryableConflictException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
