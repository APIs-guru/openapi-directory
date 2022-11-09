import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateGroupSubscriptionsDeleteUpdateGroupSubscriptionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=UpdateGroupSubscriptionID" })
  updateGroupSubscriptionId: number;
}


export class UpdateGroupSubscriptionsDeleteUpdateGroupSubscriptionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateGroupSubscriptionsDeleteUpdateGroupSubscriptionPathParams;
}


export class UpdateGroupSubscriptionsDeleteUpdateGroupSubscriptionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
