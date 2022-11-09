import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthorizerTypeEnum } from "./authorizertypeenum";


// Authorizer
/** 
 * <p>Represents an authorization layer for methods. If enabled on a method, API Gateway will activate the authorizer when a client calls the method.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html">Use Lambda Function as Authorizer</a> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html">Use Cognito User Pool as Authorizer</a> </div>
**/
export class Authorizer extends SpeakeasyBase {
  @Metadata({ data: "json, name=authType" })
  authType?: string;

  @Metadata({ data: "json, name=authorizerCredentials" })
  authorizerCredentials?: string;

  @Metadata({ data: "json, name=authorizerResultTtlInSeconds" })
  authorizerResultTtlInSeconds?: number;

  @Metadata({ data: "json, name=authorizerUri" })
  authorizerUri?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=identitySource" })
  identitySource?: string;

  @Metadata({ data: "json, name=identityValidationExpression" })
  identityValidationExpression?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=providerARNs" })
  providerArNs?: string[];

  @Metadata({ data: "json, name=type" })
  type?: AuthorizerTypeEnum;
}
