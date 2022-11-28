import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LambdaAuthorizerConfig
/** 
 * A <code>LambdaAuthorizerConfig</code> holds configuration on how to authorize AppSync API access when using the <code>AWS_LAMBDA</code> authorizer mode. Be aware that an AppSync API may have only one Lambda authorizer configured at a time.
**/
export class LambdaAuthorizerConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorizerResultTtlInSeconds" })
  authorizerResultTtlInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=authorizerUri" })
  authorizerUri: string;

  @SpeakeasyMetadata({ data: "json, name=identityValidationExpression" })
  identityValidationExpression?: string;
}
