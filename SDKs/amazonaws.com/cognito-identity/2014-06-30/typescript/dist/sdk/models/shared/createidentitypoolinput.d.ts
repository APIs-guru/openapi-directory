import { SpeakeasyBase } from "../../../internal/utils";
import { CognitoIdentityProvider } from "./cognitoidentityprovider";
/**
 * Input to the CreateIdentityPool action.
**/
export declare class CreateIdentityPoolInput extends SpeakeasyBase {
    allowClassicFlow?: boolean;
    allowUnauthenticatedIdentities: boolean;
    cognitoIdentityProviders?: CognitoIdentityProvider[];
    developerProviderName?: string;
    identityPoolName: string;
    identityPoolTags?: Map<string, string>;
    openIdConnectProviderArNs?: string[];
    samlProviderArNs?: string[];
    supportedLoginProviders?: Map<string, string>;
}
