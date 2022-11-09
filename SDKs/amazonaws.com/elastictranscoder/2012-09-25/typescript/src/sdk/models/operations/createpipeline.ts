import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreatePipelineHeaders extends SpeakeasyBase {
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
}


// CreatePipelineRequestBodyContentConfig
/** 
 * The <code>PipelineOutputConfig</code> structure.
**/
export class CreatePipelineRequestBodyContentConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=Bucket" })
  bucket?: string;

  @Metadata({ data: "json, name=Permissions", elemType: shared.Permission })
  permissions?: shared.Permission[];

  @Metadata({ data: "json, name=StorageClass" })
  storageClass?: string;
}


// CreatePipelineRequestBodyNotifications
/** 
 * <p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important>
**/
export class CreatePipelineRequestBodyNotifications extends SpeakeasyBase {
  @Metadata({ data: "json, name=Completed" })
  completed?: string;

  @Metadata({ data: "json, name=Error" })
  error?: string;

  @Metadata({ data: "json, name=Progressing" })
  progressing?: string;

  @Metadata({ data: "json, name=Warning" })
  warning?: string;
}


// CreatePipelineRequestBodyThumbnailConfig
/** 
 * The <code>PipelineOutputConfig</code> structure.
**/
export class CreatePipelineRequestBodyThumbnailConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=Bucket" })
  bucket?: string;

  @Metadata({ data: "json, name=Permissions", elemType: shared.Permission })
  permissions?: shared.Permission[];

  @Metadata({ data: "json, name=StorageClass" })
  storageClass?: string;
}


export class CreatePipelineRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=AwsKmsKeyArn" })
  awsKmsKeyArn?: string;

  @Metadata({ data: "json, name=ContentConfig" })
  contentConfig?: CreatePipelineRequestBodyContentConfig;

  @Metadata({ data: "json, name=InputBucket" })
  inputBucket: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Notifications" })
  notifications?: CreatePipelineRequestBodyNotifications;

  @Metadata({ data: "json, name=OutputBucket" })
  outputBucket?: string;

  @Metadata({ data: "json, name=Role" })
  role: string;

  @Metadata({ data: "json, name=ThumbnailConfig" })
  thumbnailConfig?: CreatePipelineRequestBodyThumbnailConfig;
}


export class CreatePipelineRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreatePipelineHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreatePipelineRequestBody;
}


export class CreatePipelineResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createPipelineResponse?: shared.CreatePipelineResponse;

  @Metadata()
  incompatibleVersionException?: any;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
