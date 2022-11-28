import { SpeakeasyBase } from "../../../internal/utils";
import { Authorizer } from "./authorizer";
/**
 * <p>Represents a collection of <a>Authorizer</a> resources.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html">Use Lambda Function as Authorizer</a> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html">Use Cognito User Pool as Authorizer</a> </div>
**/
export declare class Authorizers extends SpeakeasyBase {
    items?: Authorizer[];
    position?: string;
}
