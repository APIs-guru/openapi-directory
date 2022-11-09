import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdatePipelineNotificationsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Id" })
  id: string;
}


export class UpdatePipelineNotificationsHeaders extends SpeakeasyBase {
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


// UpdatePipelineNotificationsRequestBodyNotifications
/** 
 * <p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important>
**/
export class UpdatePipelineNotificationsRequestBodyNotifications extends SpeakeasyBase {
  @Metadata({ data: "json, name=Completed" })
  completed?: string;

  @Metadata({ data: "json, name=Error" })
  error?: string;

  @Metadata({ data: "json, name=Progressing" })
  progressing?: string;

  @Metadata({ data: "json, name=Warning" })
  warning?: string;
}


export class UpdatePipelineNotificationsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Notifications" })
  notifications: UpdatePipelineNotificationsRequestBodyNotifications;
}


export class UpdatePipelineNotificationsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdatePipelineNotificationsPathParams;

  @Metadata()
  headers: UpdatePipelineNotificationsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdatePipelineNotificationsRequestBody;
}


export class UpdatePipelineNotificationsResponse extends SpeakeasyBase {
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
  updatePipelineNotificationsResponse?: shared.UpdatePipelineNotificationsResponse;

  @Metadata()
  validationException?: any;
}
