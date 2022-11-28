import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OidcIdentityProviderConfig } from "./oidcidentityproviderconfig";



// IdentityProviderConfigResponse
/** 
 * The full description of your identity configuration.
**/
export class IdentityProviderConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=oidc" })
  oidc?: OidcIdentityProviderConfig;
}
