import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateGroupSubscriptionsDeleteUpdateGroupSubscriptionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=UpdateGroupSubscriptionID" })
  updateGroupSubscriptionId: number;
}


export class UpdateGroupSubscriptionsDeleteUpdateGroupSubscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateGroupSubscriptionsDeleteUpdateGroupSubscriptionPathParams;
}


export class UpdateGroupSubscriptionsDeleteUpdateGroupSubscriptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
