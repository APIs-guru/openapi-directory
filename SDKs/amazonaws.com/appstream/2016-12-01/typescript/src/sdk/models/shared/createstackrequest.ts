import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessEndpoint } from "./accessendpoint";
import { ApplicationSettings } from "./applicationsettings";
import { StorageConnector } from "./storageconnector";
import { UserSetting } from "./usersetting";



export class CreateStackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessEndpoints", elemType: AccessEndpoint })
  accessEndpoints?: AccessEndpoint[];

  @SpeakeasyMetadata({ data: "json, name=ApplicationSettings" })
  applicationSettings?: ApplicationSettings;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=EmbedHostDomains" })
  embedHostDomains?: string[];

  @SpeakeasyMetadata({ data: "json, name=FeedbackURL" })
  feedbackUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=RedirectURL" })
  redirectUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=StorageConnectors", elemType: StorageConnector })
  storageConnectors?: StorageConnector[];

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=UserSettings", elemType: UserSetting })
  userSettings?: UserSetting[];
}
