import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthenticateOidcActionConditionalBehaviorEnumEnum } from "./authenticateoidcactionconditionalbehaviorenumenum";



// AuthenticateOidcActionConfig
/** 
 * Request parameters when using an identity provider (IdP) that is compliant with OpenID Connect (OIDC) to authenticate users.
**/
export class AuthenticateOidcActionConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  authenticationRequestExtraParams?: Map<string, string>;

  @SpeakeasyMetadata()
  authorizationEndpoint: string;

  @SpeakeasyMetadata()
  clientId: string;

  @SpeakeasyMetadata()
  clientSecret?: string;

  @SpeakeasyMetadata()
  issuer: string;

  @SpeakeasyMetadata()
  onUnauthenticatedRequest?: AuthenticateOidcActionConditionalBehaviorEnumEnum;

  @SpeakeasyMetadata()
  scope?: string;

  @SpeakeasyMetadata()
  sessionCookieName?: string;

  @SpeakeasyMetadata()
  sessionTimeout?: number;

  @SpeakeasyMetadata()
  tokenEndpoint: string;

  @SpeakeasyMetadata()
  useExistingClientSecret?: boolean;

  @SpeakeasyMetadata()
  userInfoEndpoint: string;
}
