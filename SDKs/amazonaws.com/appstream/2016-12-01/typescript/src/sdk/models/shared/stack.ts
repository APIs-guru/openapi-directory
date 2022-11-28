import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessEndpoint } from "./accessendpoint";
import { ApplicationSettingsResponse } from "./applicationsettingsresponse";
import { StackError } from "./stackerror";
import { StorageConnector } from "./storageconnector";
import { UserSetting } from "./usersetting";



// Stack
/** 
 * Describes a stack.
**/
export class Stack extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessEndpoints", elemType: AccessEndpoint })
  accessEndpoints?: AccessEndpoint[];

  @SpeakeasyMetadata({ data: "json, name=ApplicationSettings" })
  applicationSettings?: ApplicationSettingsResponse;

  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedTime" })
  createdTime?: Date;

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

  @SpeakeasyMetadata({ data: "json, name=StackErrors", elemType: StackError })
  stackErrors?: StackError[];

  @SpeakeasyMetadata({ data: "json, name=StorageConnectors", elemType: StorageConnector })
  storageConnectors?: StorageConnector[];

  @SpeakeasyMetadata({ data: "json, name=UserSettings", elemType: UserSetting })
  userSettings?: UserSetting[];
}
