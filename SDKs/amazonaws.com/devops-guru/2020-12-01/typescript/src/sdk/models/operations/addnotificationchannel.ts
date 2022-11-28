import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddNotificationChannelHeaders extends SpeakeasyBase {
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


// AddNotificationChannelRequestBodyConfig
/** 
 *  Information about notification channels you have configured with DevOps Guru. The one supported notification channel is Amazon Simple Notification Service (Amazon SNS).
**/
export class AddNotificationChannelRequestBodyConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Sns" })
  sns?: shared.SnsChannelConfig;
}


export class AddNotificationChannelRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Config" })
  config: AddNotificationChannelRequestBodyConfig;
}


export class AddNotificationChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: AddNotificationChannelHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: AddNotificationChannelRequestBody;
}


export class AddNotificationChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  addNotificationChannelResponse?: shared.AddNotificationChannelResponse;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceQuotaExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
