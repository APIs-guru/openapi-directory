import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RequestValidator } from "./requestvalidator";



// RequestValidators
/** 
 * <p>A collection of <a>RequestValidator</a> resources of a given <a>RestApi</a>.</p> <div class="remarks"> <p>In OpenAPI, the <a>RequestValidators</a> of an API is defined by the <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions.html#api-gateway-swagger-extensions-request-validators.html">x-amazon-apigateway-request-validators</a> extension.</p> </div> <div class="seeAlso"><a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-method-request-validation.html">Enable Basic Request Validation in API Gateway</a></div>
**/
export class RequestValidators extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: RequestValidator })
  items?: RequestValidator[];

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: string;
}
