import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NotificationProperty
/** 
 * Specifies configuration properties of a notification.
**/
export class NotificationProperty extends SpeakeasyBase {
  @Metadata({ data: "json, name=NotifyDelayAfter" })
  notifyDelayAfter?: number;
}
