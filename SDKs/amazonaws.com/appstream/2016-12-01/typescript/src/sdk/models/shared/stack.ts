import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=AccessEndpoints", elemType: shared.AccessEndpoint })
  accessEndpoints?: AccessEndpoint[];

  @Metadata({ data: "json, name=ApplicationSettings" })
  applicationSettings?: ApplicationSettingsResponse;

  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=CreatedTime" })
  createdTime?: Date;

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

  @Metadata({ data: "json, name=StackErrors", elemType: shared.StackError })
  stackErrors?: StackError[];

  @Metadata({ data: "json, name=StorageConnectors", elemType: shared.StorageConnector })
  storageConnectors?: StorageConnector[];

  @Metadata({ data: "json, name=UserSettings", elemType: shared.UserSetting })
  userSettings?: UserSetting[];
}
