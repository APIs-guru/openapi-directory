import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddNotificationChannelHeaders extends SpeakeasyBase {
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


// AddNotificationChannelRequestBodyConfig
/** 
 *  Information about notification channels you have configured with DevOps Guru. The one supported notification channel is Amazon Simple Notification Service (Amazon SNS).
**/
export class AddNotificationChannelRequestBodyConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=Sns" })
  sns?: shared.SnsChannelConfig;
}


export class AddNotificationChannelRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Config" })
  config: AddNotificationChannelRequestBodyConfig;
}


export class AddNotificationChannelRequest extends SpeakeasyBase {
  @Metadata()
  headers: AddNotificationChannelHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: AddNotificationChannelRequestBody;
}


export class AddNotificationChannelResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  addNotificationChannelResponse?: shared.AddNotificationChannelResponse;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
