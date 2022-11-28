import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UntagResourceHeaders extends SpeakeasyBase {
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
}


export class UntagResourceRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceArn" })
  resourceArn: string;

  @SpeakeasyMetadata({ data: "json, name=TagKeys" })
  tagKeys: string[];
}


export class UntagResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UntagResourceHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UntagResourceRequestBody;
}


export class UntagResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: shared.AccessDeniedException;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServiceException?: shared.InternalServiceException;

  @SpeakeasyMetadata()
  invalidArnException?: shared.InvalidArnException;

  @SpeakeasyMetadata()
  invalidTaggingRequestException?: shared.InvalidTaggingRequestException;

  @SpeakeasyMetadata()
  limitExceededException?: shared.LimitExceededException;

  @SpeakeasyMetadata()
  resourceNotFoundException?: shared.ResourceNotFoundException;

  @SpeakeasyMetadata()
  retryableConflictException?: shared.RetryableConflictException;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  untagResourceResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  validationException?: shared.ValidationException;
}
