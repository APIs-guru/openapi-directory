import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IdentityNotificationAttributes } from "./identitynotificationattributes";



// GetIdentityNotificationAttributesResponse
/** 
 * Represents the notification attributes for a list of identities.
**/
export class GetIdentityNotificationAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: IdentityNotificationAttributes })
  notificationAttributes: Map<string, IdentityNotificationAttributes>;
}
