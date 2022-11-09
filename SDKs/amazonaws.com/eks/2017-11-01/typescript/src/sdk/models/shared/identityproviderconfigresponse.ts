import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OidcIdentityProviderConfig } from "./oidcidentityproviderconfig";


// IdentityProviderConfigResponse
/** 
 * The full description of your identity configuration.
**/
export class IdentityProviderConfigResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=oidc" })
  oidc?: OidcIdentityProviderConfig;
}
