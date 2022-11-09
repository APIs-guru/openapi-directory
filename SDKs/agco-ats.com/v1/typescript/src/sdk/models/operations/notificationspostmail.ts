import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class NotificationsPostMailRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  apiModelsNotification?: shared.ApiModelsNotification;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  apiModelsNotification1?: shared.ApiModelsNotification;

  @Metadata({ data: "request, media_type=text/json" })
  apiModelsNotification2?: shared.ApiModelsNotification;

  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class NotificationsPostMailRequest extends SpeakeasyBase {
  @Metadata()
  request: NotificationsPostMailRequests;
}


export class NotificationsPostMailResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
