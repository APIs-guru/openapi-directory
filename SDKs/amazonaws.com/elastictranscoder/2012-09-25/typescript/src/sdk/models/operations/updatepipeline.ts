import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdatePipelinePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Id" })
  id: string;
}


export class UpdatePipelineHeaders extends SpeakeasyBase {
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


// UpdatePipelineRequestBodyContentConfig
/** 
 * The <code>PipelineOutputConfig</code> structure.
**/
export class UpdatePipelineRequestBodyContentConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Bucket" })
  bucket?: string;

  @SpeakeasyMetadata({ data: "json, name=Permissions", elemType: shared.Permission })
  permissions?: shared.Permission[];

  @SpeakeasyMetadata({ data: "json, name=StorageClass" })
  storageClass?: string;
}


// UpdatePipelineRequestBodyNotifications
/** 
 * <p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important>
**/
export class UpdatePipelineRequestBodyNotifications extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Completed" })
  completed?: string;

  @SpeakeasyMetadata({ data: "json, name=Error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=Progressing" })
  progressing?: string;

  @SpeakeasyMetadata({ data: "json, name=Warning" })
  warning?: string;
}


// UpdatePipelineRequestBodyThumbnailConfig
/** 
 * The <code>PipelineOutputConfig</code> structure.
**/
export class UpdatePipelineRequestBodyThumbnailConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Bucket" })
  bucket?: string;

  @SpeakeasyMetadata({ data: "json, name=Permissions", elemType: shared.Permission })
  permissions?: shared.Permission[];

  @SpeakeasyMetadata({ data: "json, name=StorageClass" })
  storageClass?: string;
}


export class UpdatePipelineRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AwsKmsKeyArn" })
  awsKmsKeyArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ContentConfig" })
  contentConfig?: UpdatePipelineRequestBodyContentConfig;

  @SpeakeasyMetadata({ data: "json, name=InputBucket" })
  inputBucket?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Notifications" })
  notifications?: UpdatePipelineRequestBodyNotifications;

  @SpeakeasyMetadata({ data: "json, name=Role" })
  role?: string;

  @SpeakeasyMetadata({ data: "json, name=ThumbnailConfig" })
  thumbnailConfig?: UpdatePipelineRequestBodyThumbnailConfig;
}


export class UpdatePipelineRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdatePipelinePathParams;

  @SpeakeasyMetadata()
  headers: UpdatePipelineHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdatePipelineRequestBody;
}


export class UpdatePipelineResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  incompatibleVersionException?: any;

  @SpeakeasyMetadata()
  internalServiceException?: any;

  @SpeakeasyMetadata()
  resourceInUseException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updatePipelineResponse?: shared.UpdatePipelineResponse;

  @SpeakeasyMetadata()
  validationException?: any;
}
