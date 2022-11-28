import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateGroupSubscriptionsPostUpdateGroupSubscriptionRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  updateSystemModelsUpdateGroupSubscription?: shared.UpdateSystemModelsUpdateGroupSubscription;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  updateSystemModelsUpdateGroupSubscription1?: shared.UpdateSystemModelsUpdateGroupSubscription;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  updateSystemModelsUpdateGroupSubscription2?: shared.UpdateSystemModelsUpdateGroupSubscription;
}


export class UpdateGroupSubscriptionsPostUpdateGroupSubscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: UpdateGroupSubscriptionsPostUpdateGroupSubscriptionRequests;
}


export class UpdateGroupSubscriptionsPostUpdateGroupSubscriptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateGroupSubscriptionsPostUpdateGroupSubscription200ApplicationJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  updateGroupSubscriptionsPostUpdateGroupSubscription200TextJsonInt32Integer?: number;
}
