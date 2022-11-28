import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BackendApiAppSyncAuthSettings
/** 
 * The authentication settings for accessing provisioned data models in your Amplify project.
**/
export class BackendApiAppSyncAuthSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CognitoUserPoolId" })
  cognitoUserPoolId?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=ExpirationTime" })
  expirationTime?: number;

  @SpeakeasyMetadata({ data: "json, name=OpenIDAuthTTL" })
  openIdAuthTtl?: string;

  @SpeakeasyMetadata({ data: "json, name=OpenIDClientId" })
  openIdClientId?: string;

  @SpeakeasyMetadata({ data: "json, name=OpenIDIatTTL" })
  openIdIatTtl?: string;

  @SpeakeasyMetadata({ data: "json, name=OpenIDIssueURL" })
  openIdIssueUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=OpenIDProviderName" })
  openIdProviderName?: string;
}
