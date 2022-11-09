import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Application
/** 
 * Describes an application in the application catalog.
**/
export class Application extends SpeakeasyBase {
  @Metadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @Metadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=IconURL" })
  iconUrl?: string;

  @Metadata({ data: "json, name=LaunchParameters" })
  launchParameters?: string;

  @Metadata({ data: "json, name=LaunchPath" })
  launchPath?: string;

  @Metadata({ data: "json, name=Metadata" })
  metadata?: Map<string, string>;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}
