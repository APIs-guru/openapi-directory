import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationTypeEnum } from "./authenticationtypeenum";
import { LambdaAuthorizerConfig } from "./lambdaauthorizerconfig";
import { OpenIdConnectConfig } from "./openidconnectconfig";
import { CognitoUserPoolConfig } from "./cognitouserpoolconfig";



// AdditionalAuthenticationProvider
/** 
 * Describes an additional authentication provider.
**/
export class AdditionalAuthenticationProvider extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authenticationType" })
  authenticationType?: AuthenticationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=lambdaAuthorizerConfig" })
  lambdaAuthorizerConfig?: LambdaAuthorizerConfig;

  @SpeakeasyMetadata({ data: "json, name=openIDConnectConfig" })
  openIdConnectConfig?: OpenIdConnectConfig;

  @SpeakeasyMetadata({ data: "json, name=userPoolConfig" })
  userPoolConfig?: CognitoUserPoolConfig;
}
