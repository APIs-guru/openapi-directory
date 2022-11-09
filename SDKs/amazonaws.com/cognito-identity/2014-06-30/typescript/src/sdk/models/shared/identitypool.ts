import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CognitoIdentityProvider } from "./cognitoidentityprovider";


// IdentityPool
/** 
 * An object representing an Amazon Cognito identity pool.
**/
export class IdentityPool extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllowClassicFlow" })
  allowClassicFlow?: boolean;

  @Metadata({ data: "json, name=AllowUnauthenticatedIdentities" })
  allowUnauthenticatedIdentities: boolean;

  @Metadata({ data: "json, name=CognitoIdentityProviders", elemType: shared.CognitoIdentityProvider })
  cognitoIdentityProviders?: CognitoIdentityProvider[];

  @Metadata({ data: "json, name=DeveloperProviderName" })
  developerProviderName?: string;

  @Metadata({ data: "json, name=IdentityPoolId" })
  identityPoolId: string;

  @Metadata({ data: "json, name=IdentityPoolName" })
  identityPoolName: string;

  @Metadata({ data: "json, name=IdentityPoolTags" })
  identityPoolTags?: Map<string, string>;

  @Metadata({ data: "json, name=OpenIdConnectProviderARNs" })
  openIdConnectProviderArNs?: string[];

  @Metadata({ data: "json, name=SamlProviderARNs" })
  samlProviderArNs?: string[];

  @Metadata({ data: "json, name=SupportedLoginProviders" })
  supportedLoginProviders?: Map<string, string>;
}
