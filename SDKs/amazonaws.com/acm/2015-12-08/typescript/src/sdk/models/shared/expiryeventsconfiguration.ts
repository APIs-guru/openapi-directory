import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExpiryEventsConfiguration
/** 
 * Object containing expiration events options associated with an Amazon Web Services account.
**/
export class ExpiryEventsConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=DaysBeforeExpiry" })
  daysBeforeExpiry?: number;
}
