import { SpeakeasyBase } from "../../../internal/utils";
import { AuthenticateOidcActionConditionalBehaviorEnumEnum } from "./authenticateoidcactionconditionalbehaviorenumenum";
/**
 * Request parameters when using an identity provider (IdP) that is compliant with OpenID Connect (OIDC) to authenticate users.
**/
export declare class AuthenticateOidcActionConfig extends SpeakeasyBase {
    authenticationRequestExtraParams?: Map<string, string>;
    authorizationEndpoint: string;
    clientId: string;
    clientSecret?: string;
    issuer: string;
    onUnauthenticatedRequest?: AuthenticateOidcActionConditionalBehaviorEnumEnum;
    scope?: string;
    sessionCookieName?: string;
    sessionTimeout?: number;
    tokenEndpoint: string;
    useExistingClientSecret?: boolean;
    userInfoEndpoint: string;
}
