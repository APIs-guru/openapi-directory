import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdatePipelinePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Id" })
  id: string;
}


export class UpdatePipelineHeaders extends SpeakeasyBase {
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


// UpdatePipelineRequestBodyContentConfig
/** 
 * The <code>PipelineOutputConfig</code> structure.
**/
export class UpdatePipelineRequestBodyContentConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=Bucket" })
  bucket?: string;

  @Metadata({ data: "json, name=Permissions", elemType: shared.Permission })
  permissions?: shared.Permission[];

  @Metadata({ data: "json, name=StorageClass" })
  storageClass?: string;
}


// UpdatePipelineRequestBodyNotifications
/** 
 * <p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important>
**/
export class UpdatePipelineRequestBodyNotifications extends SpeakeasyBase {
  @Metadata({ data: "json, name=Completed" })
  completed?: string;

  @Metadata({ data: "json, name=Error" })
  error?: string;

  @Metadata({ data: "json, name=Progressing" })
  progressing?: string;

  @Metadata({ data: "json, name=Warning" })
  warning?: string;
}


// UpdatePipelineRequestBodyThumbnailConfig
/** 
 * The <code>PipelineOutputConfig</code> structure.
**/
export class UpdatePipelineRequestBodyThumbnailConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=Bucket" })
  bucket?: string;

  @Metadata({ data: "json, name=Permissions", elemType: shared.Permission })
  permissions?: shared.Permission[];

  @Metadata({ data: "json, name=StorageClass" })
  storageClass?: string;
}


export class UpdatePipelineRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=AwsKmsKeyArn" })
  awsKmsKeyArn?: string;

  @Metadata({ data: "json, name=ContentConfig" })
  contentConfig?: UpdatePipelineRequestBodyContentConfig;

  @Metadata({ data: "json, name=InputBucket" })
  inputBucket?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Notifications" })
  notifications?: UpdatePipelineRequestBodyNotifications;

  @Metadata({ data: "json, name=Role" })
  role?: string;

  @Metadata({ data: "json, name=ThumbnailConfig" })
  thumbnailConfig?: UpdatePipelineRequestBodyThumbnailConfig;
}


export class UpdatePipelineRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdatePipelinePathParams;

  @Metadata()
  headers: UpdatePipelineHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdatePipelineRequestBody;
}


export class UpdatePipelineResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  incompatibleVersionException?: any;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updatePipelineResponse?: shared.UpdatePipelineResponse;

  @Metadata()
  validationException?: any;
}
