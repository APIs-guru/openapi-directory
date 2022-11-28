import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Subscription } from "./subscription";



// SubscriptionDefinitionVersion
/** 
 * Information about a subscription definition version.
**/
export class SubscriptionDefinitionVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Subscriptions", elemType: Subscription })
  subscriptions?: Subscription[];
}
