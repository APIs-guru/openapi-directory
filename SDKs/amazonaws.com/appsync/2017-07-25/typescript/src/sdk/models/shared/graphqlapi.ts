import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=additionalAuthenticationProviders", elemType: shared.AdditionalAuthenticationProvider })
  additionalAuthenticationProviders?: AdditionalAuthenticationProvider[];

  @Metadata({ data: "json, name=apiId" })
  apiId?: string;

  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=authenticationType" })
  authenticationType?: AuthenticationTypeEnum;

  @Metadata({ data: "json, name=lambdaAuthorizerConfig" })
  lambdaAuthorizerConfig?: LambdaAuthorizerConfig;

  @Metadata({ data: "json, name=logConfig" })
  logConfig?: LogConfig;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=openIDConnectConfig" })
  openIdConnectConfig?: OpenIdConnectConfig;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=uris" })
  uris?: Map<string, string>;

  @Metadata({ data: "json, name=userPoolConfig" })
  userPoolConfig?: UserPoolConfig;

  @Metadata({ data: "json, name=wafWebAclArn" })
  wafWebAclArn?: string;

  @Metadata({ data: "json, name=xrayEnabled" })
  xrayEnabled?: boolean;
}
