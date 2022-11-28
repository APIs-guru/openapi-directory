import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateGroupSubscriptionsGetUpdateGroupSubscriptionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=UpdateGroupSubscriptionID" })
  updateGroupSubscriptionId: number;
}


export class UpdateGroupSubscriptionsGetUpdateGroupSubscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateGroupSubscriptionsGetUpdateGroupSubscriptionPathParams;
}


export class UpdateGroupSubscriptionsGetUpdateGroupSubscriptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateSystemModelsUpdateGroupSubscription?: shared.UpdateSystemModelsUpdateGroupSubscription;
}
