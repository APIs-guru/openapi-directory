import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateGroupSubscriptionsPutUpdateGroupSubscriptionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=UpdateGroupSubscriptionID" })
  updateGroupSubscriptionId: number;
}


export class UpdateGroupSubscriptionsPutUpdateGroupSubscriptionRequests extends SpeakeasyBase {
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


export class UpdateGroupSubscriptionsPutUpdateGroupSubscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateGroupSubscriptionsPutUpdateGroupSubscriptionPathParams;

  @SpeakeasyMetadata()
  request: UpdateGroupSubscriptionsPutUpdateGroupSubscriptionRequests;
}


export class UpdateGroupSubscriptionsPutUpdateGroupSubscriptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
