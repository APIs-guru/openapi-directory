import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateGroupSubscriptionsPutUpdateGroupSubscriptionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=UpdateGroupSubscriptionID" })
  updateGroupSubscriptionId: number;
}


export class UpdateGroupSubscriptionsPutUpdateGroupSubscriptionRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  updateSystemModelsUpdateGroupSubscription?: shared.UpdateSystemModelsUpdateGroupSubscription;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  updateSystemModelsUpdateGroupSubscription1?: shared.UpdateSystemModelsUpdateGroupSubscription;

  @Metadata({ data: "request, media_type=text/json" })
  updateSystemModelsUpdateGroupSubscription2?: shared.UpdateSystemModelsUpdateGroupSubscription;
}


export class UpdateGroupSubscriptionsPutUpdateGroupSubscriptionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateGroupSubscriptionsPutUpdateGroupSubscriptionPathParams;

  @Metadata()
  request: UpdateGroupSubscriptionsPutUpdateGroupSubscriptionRequests;
}


export class UpdateGroupSubscriptionsPutUpdateGroupSubscriptionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
