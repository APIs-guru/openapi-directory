import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthenticationTypeEnum } from "./authenticationtypeenum";
import { LambdaAuthorizerConfig } from "./lambdaauthorizerconfig";
import { OpenIdConnectConfig } from "./openidconnectconfig";
import { CognitoUserPoolConfig } from "./cognitouserpoolconfig";
/**
 * Describes an additional authentication provider.
**/
export declare class AdditionalAuthenticationProvider extends SpeakeasyBase {
    authenticationType?: AuthenticationTypeEnum;
    lambdaAuthorizerConfig?: LambdaAuthorizerConfig;
    openIdConnectConfig?: OpenIdConnectConfig;
    userPoolConfig?: CognitoUserPoolConfig;
}
