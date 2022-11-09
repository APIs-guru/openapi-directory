import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CognitoIdentityProvider
/** 
 * A provider representing an Amazon Cognito user pool and its client ID.
**/
export class CognitoIdentityProvider extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientId" })
  clientId?: string;

  @Metadata({ data: "json, name=ProviderName" })
  providerName?: string;

  @Metadata({ data: "json, name=ServerSideTokenCheck" })
  serverSideTokenCheck?: boolean;
}
