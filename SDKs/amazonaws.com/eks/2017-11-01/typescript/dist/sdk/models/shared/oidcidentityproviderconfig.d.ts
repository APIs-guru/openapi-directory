import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigStatusEnum } from "./configstatusenum";
/**
 * An object that represents the configuration for an OpenID Connect (OIDC) identity provider.
**/
export declare class OidcIdentityProviderConfig extends SpeakeasyBase {
    clientId?: string;
    clusterName?: string;
    groupsClaim?: string;
    groupsPrefix?: string;
    identityProviderConfigArn?: string;
    identityProviderConfigName?: string;
    issuerUrl?: string;
    requiredClaims?: Map<string, string>;
    status?: ConfigStatusEnum;
    tags?: Map<string, string>;
    usernameClaim?: string;
    usernamePrefix?: string;
}
