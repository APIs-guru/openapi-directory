import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Subscription
/** 
 * Information about a subscription.
**/
export class Subscription extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id" })
  id: string;

  @Metadata({ data: "json, name=Source" })
  source: string;

  @Metadata({ data: "json, name=Subject" })
  subject: string;

  @Metadata({ data: "json, name=Target" })
  target: string;
}
