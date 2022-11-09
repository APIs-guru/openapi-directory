import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BackendApiAppSyncAuthSettings
/** 
 * The authentication settings for accessing provisioned data models in your Amplify project.
**/
export class BackendApiAppSyncAuthSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=CognitoUserPoolId" })
  cognitoUserPoolId?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=ExpirationTime" })
  expirationTime?: number;

  @Metadata({ data: "json, name=OpenIDAuthTTL" })
  openIdAuthTtl?: string;

  @Metadata({ data: "json, name=OpenIDClientId" })
  openIdClientId?: string;

  @Metadata({ data: "json, name=OpenIDIatTTL" })
  openIdIatTtl?: string;

  @Metadata({ data: "json, name=OpenIDIssueURL" })
  openIdIssueUrl?: string;

  @Metadata({ data: "json, name=OpenIDProviderName" })
  openIdProviderName?: string;
}
