import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DetachPolicyHeaders extends SpeakeasyBase {
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


// DetachPolicyRequestBodyObjectReference
/** 
 * The reference that identifies an object.
**/
export class DetachPolicyRequestBodyObjectReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=Selector" })
  selector?: string;
}


// DetachPolicyRequestBodyPolicyReference
/** 
 * The reference that identifies an object.
**/
export class DetachPolicyRequestBodyPolicyReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=Selector" })
  selector?: string;
}


export class DetachPolicyRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ObjectReference" })
  objectReference: DetachPolicyRequestBodyObjectReference;

  @Metadata({ data: "json, name=PolicyReference" })
  policyReference: DetachPolicyRequestBodyPolicyReference;
}


export class DetachPolicyRequest extends SpeakeasyBase {
  @Metadata()
  headers: DetachPolicyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: DetachPolicyRequestBody;
}


export class DetachPolicyResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  detachPolicyResponse?: Map<string, any>;

  @Metadata()
  directoryNotEnabledException?: any;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidArnException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  notPolicyException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  retryableConflictException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
