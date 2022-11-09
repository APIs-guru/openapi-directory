import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Subscription } from "./subscription";


export class ListEventSubscriptionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=subscriptions", elemType: shared.Subscription })
  subscriptions: Subscription[];
}
