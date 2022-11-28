import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NotificationProperty
/** 
 * Specifies configuration properties of a notification.
**/
export class NotificationProperty extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NotifyDelayAfter" })
  notifyDelayAfter?: number;
}
