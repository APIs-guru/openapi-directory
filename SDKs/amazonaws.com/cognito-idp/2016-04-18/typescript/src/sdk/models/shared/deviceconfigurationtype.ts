import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeviceConfigurationType
/** 
 * The configuration for the user pool's device tracking.
**/
export class DeviceConfigurationType extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChallengeRequiredOnNewDevice" })
  challengeRequiredOnNewDevice?: boolean;

  @Metadata({ data: "json, name=DeviceOnlyRememberedOnUserPrompt" })
  deviceOnlyRememberedOnUserPrompt?: boolean;
}
