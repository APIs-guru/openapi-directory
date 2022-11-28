import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Application
/** 
 * Describes an application in the application catalog.
**/
export class Application extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IconURL" })
  iconUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=LaunchParameters" })
  launchParameters?: string;

  @SpeakeasyMetadata({ data: "json, name=LaunchPath" })
  launchPath?: string;

  @SpeakeasyMetadata({ data: "json, name=Metadata" })
  metadata?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
