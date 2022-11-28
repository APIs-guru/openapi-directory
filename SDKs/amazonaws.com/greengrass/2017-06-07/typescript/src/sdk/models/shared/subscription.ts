import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Subscription
/** 
 * Information about a subscription.
**/
export class Subscription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=Source" })
  source: string;

  @SpeakeasyMetadata({ data: "json, name=Subject" })
  subject: string;

  @SpeakeasyMetadata({ data: "json, name=Target" })
  target: string;
}
