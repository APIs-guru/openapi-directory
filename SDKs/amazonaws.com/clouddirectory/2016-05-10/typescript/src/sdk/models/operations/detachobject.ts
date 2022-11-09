import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DetachObjectHeaders extends SpeakeasyBase {
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


// DetachObjectRequestBodyParentReference
/** 
 * The reference that identifies an object.
**/
export class DetachObjectRequestBodyParentReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=Selector" })
  selector?: string;
}


export class DetachObjectRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=LinkName" })
  linkName: string;

  @Metadata({ data: "json, name=ParentReference" })
  parentReference: DetachObjectRequestBodyParentReference;
}


export class DetachObjectRequest extends SpeakeasyBase {
  @Metadata()
  headers: DetachObjectHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: DetachObjectRequestBody;
}


export class DetachObjectResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: shared.AccessDeniedException;

  @Metadata()
  contentType: string;

  @Metadata()
  detachObjectResponse?: shared.DetachObjectResponse;

  @Metadata()
  directoryNotEnabledException?: shared.DirectoryNotEnabledException;

  @Metadata()
  internalServiceException?: shared.InternalServiceException;

  @Metadata()
  invalidArnException?: shared.InvalidArnException;

  @Metadata()
  limitExceededException?: shared.LimitExceededException;

  @Metadata()
  notNodeException?: shared.NotNodeException;

  @Metadata()
  resourceNotFoundException?: shared.ResourceNotFoundException;

  @Metadata()
  retryableConflictException?: shared.RetryableConflictException;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: shared.ValidationException;
}
