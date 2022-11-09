import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthorizerTypeEnum } from "./authorizertypeenum";
/**
 * <p>Represents an authorization layer for methods. If enabled on a method, API Gateway will activate the authorizer when a client calls the method.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html">Use Lambda Function as Authorizer</a> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html">Use Cognito User Pool as Authorizer</a> </div>
**/
export declare class Authorizer extends SpeakeasyBase {
    authType?: string;
    authorizerCredentials?: string;
    authorizerResultTtlInSeconds?: number;
    authorizerUri?: string;
    id?: string;
    identitySource?: string;
    identityValidationExpression?: string;
    name?: string;
    providerArNs?: string[];
    type?: AuthorizerTypeEnum;
}
