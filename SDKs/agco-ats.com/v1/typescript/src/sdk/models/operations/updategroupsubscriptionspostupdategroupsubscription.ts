import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateGroupSubscriptionsPostUpdateGroupSubscriptionRequests extends SpeakeasyBase {
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


export class UpdateGroupSubscriptionsPostUpdateGroupSubscriptionRequest extends SpeakeasyBase {
  @Metadata()
  request: UpdateGroupSubscriptionsPostUpdateGroupSubscriptionRequests;
}


export class UpdateGroupSubscriptionsPostUpdateGroupSubscriptionResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateGroupSubscriptionsPostUpdateGroupSubscription200ApplicationJsonInt32Integer?: number;

  @Metadata()
  updateGroupSubscriptionsPostUpdateGroupSubscription200TextJsonInt32Integer?: number;
}
