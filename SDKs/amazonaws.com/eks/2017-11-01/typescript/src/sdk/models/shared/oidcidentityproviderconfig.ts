import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigStatusEnum } from "./configstatusenum";


// OidcIdentityProviderConfig
/** 
 * An object that represents the configuration for an OpenID Connect (OIDC) identity provider. 
**/
export class OidcIdentityProviderConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientId" })
  clientId?: string;

  @Metadata({ data: "json, name=clusterName" })
  clusterName?: string;

  @Metadata({ data: "json, name=groupsClaim" })
  groupsClaim?: string;

  @Metadata({ data: "json, name=groupsPrefix" })
  groupsPrefix?: string;

  @Metadata({ data: "json, name=identityProviderConfigArn" })
  identityProviderConfigArn?: string;

  @Metadata({ data: "json, name=identityProviderConfigName" })
  identityProviderConfigName?: string;

  @Metadata({ data: "json, name=issuerUrl" })
  issuerUrl?: string;

  @Metadata({ data: "json, name=requiredClaims" })
  requiredClaims?: Map<string, string>;

  @Metadata({ data: "json, name=status" })
  status?: ConfigStatusEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=usernameClaim" })
  usernameClaim?: string;

  @Metadata({ data: "json, name=usernamePrefix" })
  usernamePrefix?: string;
}
