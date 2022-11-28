import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DetachPolicyHeaders extends SpeakeasyBase {
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


// DetachPolicyRequestBodyObjectReference
/** 
 * The reference that identifies an object.
**/
export class DetachPolicyRequestBodyObjectReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Selector" })
  selector?: string;
}


// DetachPolicyRequestBodyPolicyReference
/** 
 * The reference that identifies an object.
**/
export class DetachPolicyRequestBodyPolicyReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Selector" })
  selector?: string;
}


export class DetachPolicyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ObjectReference" })
  objectReference: DetachPolicyRequestBodyObjectReference;

  @SpeakeasyMetadata({ data: "json, name=PolicyReference" })
  policyReference: DetachPolicyRequestBodyPolicyReference;
}


export class DetachPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DetachPolicyHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: DetachPolicyRequestBody;
}


export class DetachPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: shared.AccessDeniedException;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  detachPolicyResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  directoryNotEnabledException?: shared.DirectoryNotEnabledException;

  @SpeakeasyMetadata()
  internalServiceException?: shared.InternalServiceException;

  @SpeakeasyMetadata()
  invalidArnException?: shared.InvalidArnException;

  @SpeakeasyMetadata()
  limitExceededException?: shared.LimitExceededException;

  @SpeakeasyMetadata()
  notPolicyException?: shared.NotPolicyException;

  @SpeakeasyMetadata()
  resourceNotFoundException?: shared.ResourceNotFoundException;

  @SpeakeasyMetadata()
  retryableConflictException?: shared.RetryableConflictException;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: shared.ValidationException;
}
