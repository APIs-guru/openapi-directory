import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LambdaAuthorizerConfig
/** 
 * A <code>LambdaAuthorizerConfig</code> holds configuration on how to authorize AppSync API access when using the <code>AWS_LAMBDA</code> authorizer mode. Be aware that an AppSync API may have only one Lambda authorizer configured at a time.
**/
export class LambdaAuthorizerConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorizerResultTtlInSeconds" })
  authorizerResultTtlInSeconds?: number;

  @Metadata({ data: "json, name=authorizerUri" })
  authorizerUri: string;

  @Metadata({ data: "json, name=identityValidationExpression" })
  identityValidationExpression?: string;
}
