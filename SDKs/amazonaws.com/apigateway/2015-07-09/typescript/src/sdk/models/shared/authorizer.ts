import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthorizerTypeEnum } from "./authorizertypeenum";



// Authorizer
/** 
 * <p>Represents an authorization layer for methods. If enabled on a method, API Gateway will activate the authorizer when a client calls the method.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html">Use Lambda Function as Authorizer</a> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html">Use Cognito User Pool as Authorizer</a> </div>
**/
export class Authorizer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authType" })
  authType?: string;

  @SpeakeasyMetadata({ data: "json, name=authorizerCredentials" })
  authorizerCredentials?: string;

  @SpeakeasyMetadata({ data: "json, name=authorizerResultTtlInSeconds" })
  authorizerResultTtlInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=authorizerUri" })
  authorizerUri?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=identitySource" })
  identitySource?: string;

  @SpeakeasyMetadata({ data: "json, name=identityValidationExpression" })
  identityValidationExpression?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=providerARNs" })
  providerArNs?: string[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: AuthorizerTypeEnum;
}
