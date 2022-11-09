import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccessEndpoint } from "./accessendpoint";
import { ApplicationSettings } from "./applicationsettings";
import { StorageConnector } from "./storageconnector";
import { UserSetting } from "./usersetting";


export class CreateStackRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessEndpoints", elemType: shared.AccessEndpoint })
  accessEndpoints?: AccessEndpoint[];

  @Metadata({ data: "json, name=ApplicationSettings" })
  applicationSettings?: ApplicationSettings;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @Metadata({ data: "json, name=EmbedHostDomains" })
  embedHostDomains?: string[];

  @Metadata({ data: "json, name=FeedbackURL" })
  feedbackUrl?: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=RedirectURL" })
  redirectUrl?: string;

  @Metadata({ data: "json, name=StorageConnectors", elemType: shared.StorageConnector })
  storageConnectors?: StorageConnector[];

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=UserSettings", elemType: shared.UserSetting })
  userSettings?: UserSetting[];
}
