import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CognitoIdentityProvider
/** 
 * A provider representing an Amazon Cognito user pool and its client ID.
**/
export class CognitoIdentityProvider extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=ProviderName" })
  providerName?: string;

  @SpeakeasyMetadata({ data: "json, name=ServerSideTokenCheck" })
  serverSideTokenCheck?: boolean;
}
