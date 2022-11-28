import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdatePipelineNotificationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Id" })
  id: string;
}


export class UpdatePipelineNotificationsHeaders extends SpeakeasyBase {
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


// UpdatePipelineNotificationsRequestBodyNotifications
/** 
 * <p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important>
**/
export class UpdatePipelineNotificationsRequestBodyNotifications extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Completed" })
  completed?: string;

  @SpeakeasyMetadata({ data: "json, name=Error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=Progressing" })
  progressing?: string;

  @SpeakeasyMetadata({ data: "json, name=Warning" })
  warning?: string;
}


export class UpdatePipelineNotificationsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Notifications" })
  notifications: UpdatePipelineNotificationsRequestBodyNotifications;
}


export class UpdatePipelineNotificationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdatePipelineNotificationsPathParams;

  @SpeakeasyMetadata()
  headers: UpdatePipelineNotificationsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdatePipelineNotificationsRequestBody;
}


export class UpdatePipelineNotificationsResponse extends SpeakeasyBase {
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
  updatePipelineNotificationsResponse?: shared.UpdatePipelineNotificationsResponse;

  @SpeakeasyMetadata()
  validationException?: any;
}
