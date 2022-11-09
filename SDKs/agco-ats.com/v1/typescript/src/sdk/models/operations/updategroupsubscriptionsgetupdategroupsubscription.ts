import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateGroupSubscriptionsGetUpdateGroupSubscriptionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=UpdateGroupSubscriptionID" })
  updateGroupSubscriptionId: number;
}


export class UpdateGroupSubscriptionsGetUpdateGroupSubscriptionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateGroupSubscriptionsGetUpdateGroupSubscriptionPathParams;
}


export class UpdateGroupSubscriptionsGetUpdateGroupSubscriptionResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateSystemModelsUpdateGroupSubscription?: shared.UpdateSystemModelsUpdateGroupSubscription;
}
