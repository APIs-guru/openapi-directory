import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreatePipelineHeaders extends SpeakeasyBase {
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


// CreatePipelineRequestBodyContentConfig
/** 
 * The <code>PipelineOutputConfig</code> structure.
**/
export class CreatePipelineRequestBodyContentConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Bucket" })
  bucket?: string;

  @SpeakeasyMetadata({ data: "json, name=Permissions", elemType: shared.Permission })
  permissions?: shared.Permission[];

  @SpeakeasyMetadata({ data: "json, name=StorageClass" })
  storageClass?: string;
}


// CreatePipelineRequestBodyNotifications
/** 
 * <p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important>
**/
export class CreatePipelineRequestBodyNotifications extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Completed" })
  completed?: string;

  @SpeakeasyMetadata({ data: "json, name=Error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=Progressing" })
  progressing?: string;

  @SpeakeasyMetadata({ data: "json, name=Warning" })
  warning?: string;
}


// CreatePipelineRequestBodyThumbnailConfig
/** 
 * The <code>PipelineOutputConfig</code> structure.
**/
export class CreatePipelineRequestBodyThumbnailConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Bucket" })
  bucket?: string;

  @SpeakeasyMetadata({ data: "json, name=Permissions", elemType: shared.Permission })
  permissions?: shared.Permission[];

  @SpeakeasyMetadata({ data: "json, name=StorageClass" })
  storageClass?: string;
}


export class CreatePipelineRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AwsKmsKeyArn" })
  awsKmsKeyArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ContentConfig" })
  contentConfig?: CreatePipelineRequestBodyContentConfig;

  @SpeakeasyMetadata({ data: "json, name=InputBucket" })
  inputBucket: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Notifications" })
  notifications?: CreatePipelineRequestBodyNotifications;

  @SpeakeasyMetadata({ data: "json, name=OutputBucket" })
  outputBucket?: string;

  @SpeakeasyMetadata({ data: "json, name=Role" })
  role: string;

  @SpeakeasyMetadata({ data: "json, name=ThumbnailConfig" })
  thumbnailConfig?: CreatePipelineRequestBodyThumbnailConfig;
}


export class CreatePipelineRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreatePipelineHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreatePipelineRequestBody;
}


export class CreatePipelineResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createPipelineResponse?: shared.CreatePipelineResponse;

  @SpeakeasyMetadata()
  incompatibleVersionException?: any;

  @SpeakeasyMetadata()
  internalServiceException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: any;
}
