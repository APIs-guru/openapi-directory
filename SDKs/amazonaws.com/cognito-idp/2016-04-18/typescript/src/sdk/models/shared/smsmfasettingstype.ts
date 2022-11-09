import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SmsMfaSettingsType
/** 
 * The type used for enabling SMS MFA at the user level. Phone numbers don't need to be verified to be used for SMS MFA. If an MFA type is enabled for a user, the user will be prompted for MFA during all sign in attempts, unless device tracking is turned on and the device has been trusted. If you would like MFA to be applied selectively based on the assessed risk level of sign in attempts, disable MFA for users and turn on Adaptive Authentication for the user pool.
**/
export class SmsMfaSettingsType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=PreferredMfa" })
  preferredMfa?: boolean;
}
