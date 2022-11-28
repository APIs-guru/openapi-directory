import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigStatusEnum } from "./configstatusenum";



// OidcIdentityProviderConfig
/** 
 * An object that represents the configuration for an OpenID Connect (OIDC) identity provider. 
**/
export class OidcIdentityProviderConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=clusterName" })
  clusterName?: string;

  @SpeakeasyMetadata({ data: "json, name=groupsClaim" })
  groupsClaim?: string;

  @SpeakeasyMetadata({ data: "json, name=groupsPrefix" })
  groupsPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=identityProviderConfigArn" })
  identityProviderConfigArn?: string;

  @SpeakeasyMetadata({ data: "json, name=identityProviderConfigName" })
  identityProviderConfigName?: string;

  @SpeakeasyMetadata({ data: "json, name=issuerUrl" })
  issuerUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=requiredClaims" })
  requiredClaims?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ConfigStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=usernameClaim" })
  usernameClaim?: string;

  @SpeakeasyMetadata({ data: "json, name=usernamePrefix" })
  usernamePrefix?: string;
}
