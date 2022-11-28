import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class NotificationsPostMailRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  apiModelsNotification?: shared.ApiModelsNotification;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  apiModelsNotification1?: shared.ApiModelsNotification;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  apiModelsNotification2?: shared.ApiModelsNotification;

  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class NotificationsPostMailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: NotificationsPostMailRequests;
}


export class NotificationsPostMailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
