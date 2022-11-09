import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Authorizer } from "./authorizer";


// Authorizers
/** 
 * <p>Represents a collection of <a>Authorizer</a> resources.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html">Use Lambda Function as Authorizer</a> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html">Use Cognito User Pool as Authorizer</a> </div>
**/
export class Authorizers extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.Authorizer })
  items?: Authorizer[];

  @Metadata({ data: "json, name=position" })
  position?: string;
}
