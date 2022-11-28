import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AdditionalAuthenticationProvider } from "./additionalauthenticationprovider";
import { AuthenticationTypeEnum } from "./authenticationtypeenum";
import { LambdaAuthorizerConfig } from "./lambdaauthorizerconfig";
import { LogConfig } from "./logconfig";
import { OpenIdConnectConfig } from "./openidconnectconfig";
import { UserPoolConfig } from "./userpoolconfig";



// GraphqlApi
/** 
 * Describes a GraphQL API.
**/
export class GraphqlApi extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalAuthenticationProviders", elemType: AdditionalAuthenticationProvider })
  additionalAuthenticationProviders?: AdditionalAuthenticationProvider[];

  @SpeakeasyMetadata({ data: "json, name=apiId" })
  apiId?: string;

  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=authenticationType" })
  authenticationType?: AuthenticationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=lambdaAuthorizerConfig" })
  lambdaAuthorizerConfig?: LambdaAuthorizerConfig;

  @SpeakeasyMetadata({ data: "json, name=logConfig" })
  logConfig?: LogConfig;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=openIDConnectConfig" })
  openIdConnectConfig?: OpenIdConnectConfig;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=uris" })
  uris?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=userPoolConfig" })
  userPoolConfig?: UserPoolConfig;

  @SpeakeasyMetadata({ data: "json, name=wafWebAclArn" })
  wafWebAclArn?: string;

  @SpeakeasyMetadata({ data: "json, name=xrayEnabled" })
  xrayEnabled?: boolean;
}
