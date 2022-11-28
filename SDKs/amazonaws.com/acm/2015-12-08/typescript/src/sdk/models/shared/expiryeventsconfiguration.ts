import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExpiryEventsConfiguration
/** 
 * Object containing expiration events options associated with an Amazon Web Services account.
**/
export class ExpiryEventsConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DaysBeforeExpiry" })
  daysBeforeExpiry?: number;
}
