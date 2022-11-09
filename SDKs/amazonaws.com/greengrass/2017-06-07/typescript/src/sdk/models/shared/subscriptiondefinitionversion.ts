import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Subscription } from "./subscription";


// SubscriptionDefinitionVersion
/** 
 * Information about a subscription definition version.
**/
export class SubscriptionDefinitionVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=Subscriptions", elemType: shared.Subscription })
  subscriptions?: Subscription[];
}
