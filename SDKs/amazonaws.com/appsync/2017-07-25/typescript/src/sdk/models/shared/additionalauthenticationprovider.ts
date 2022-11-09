import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthenticationTypeEnum } from "./authenticationtypeenum";
import { LambdaAuthorizerConfig } from "./lambdaauthorizerconfig";
import { OpenIdConnectConfig } from "./openidconnectconfig";
import { CognitoUserPoolConfig } from "./cognitouserpoolconfig";


// AdditionalAuthenticationProvider
/** 
 * Describes an additional authentication provider.
**/
export class AdditionalAuthenticationProvider extends SpeakeasyBase {
  @Metadata({ data: "json, name=authenticationType" })
  authenticationType?: AuthenticationTypeEnum;

  @Metadata({ data: "json, name=lambdaAuthorizerConfig" })
  lambdaAuthorizerConfig?: LambdaAuthorizerConfig;

  @Metadata({ data: "json, name=openIDConnectConfig" })
  openIdConnectConfig?: OpenIdConnectConfig;

  @Metadata({ data: "json, name=userPoolConfig" })
  userPoolConfig?: CognitoUserPoolConfig;
}
