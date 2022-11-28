import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CognitoIdentityProvider } from "./cognitoidentityprovider";



// IdentityPool
/** 
 * An object representing an Amazon Cognito identity pool.
**/
export class IdentityPool extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllowClassicFlow" })
  allowClassicFlow?: boolean;

  @SpeakeasyMetadata({ data: "json, name=AllowUnauthenticatedIdentities" })
  allowUnauthenticatedIdentities: boolean;

  @SpeakeasyMetadata({ data: "json, name=CognitoIdentityProviders", elemType: CognitoIdentityProvider })
  cognitoIdentityProviders?: CognitoIdentityProvider[];

  @SpeakeasyMetadata({ data: "json, name=DeveloperProviderName" })
  developerProviderName?: string;

  @SpeakeasyMetadata({ data: "json, name=IdentityPoolId" })
  identityPoolId: string;

  @SpeakeasyMetadata({ data: "json, name=IdentityPoolName" })
  identityPoolName: string;

  @SpeakeasyMetadata({ data: "json, name=IdentityPoolTags" })
  identityPoolTags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=OpenIdConnectProviderARNs" })
  openIdConnectProviderArNs?: string[];

  @SpeakeasyMetadata({ data: "json, name=SamlProviderARNs" })
  samlProviderArNs?: string[];

  @SpeakeasyMetadata({ data: "json, name=SupportedLoginProviders" })
  supportedLoginProviders?: Map<string, string>;
}
