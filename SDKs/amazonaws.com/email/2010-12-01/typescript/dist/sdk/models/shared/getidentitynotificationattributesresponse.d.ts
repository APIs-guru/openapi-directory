import { SpeakeasyBase } from "../../../internal/utils";
import { IdentityNotificationAttributes } from "./identitynotificationattributes";
/**
 * Represents the notification attributes for a list of identities.
**/
export declare class GetIdentityNotificationAttributesResponse extends SpeakeasyBase {
    notificationAttributes: Map<string, IdentityNotificationAttributes>;
}
