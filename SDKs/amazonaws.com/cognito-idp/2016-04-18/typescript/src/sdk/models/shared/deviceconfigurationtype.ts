import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeviceConfigurationType
/** 
 * The configuration for the user pool's device tracking.
**/
export class DeviceConfigurationType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChallengeRequiredOnNewDevice" })
  challengeRequiredOnNewDevice?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DeviceOnlyRememberedOnUserPrompt" })
  deviceOnlyRememberedOnUserPrompt?: boolean;
}
