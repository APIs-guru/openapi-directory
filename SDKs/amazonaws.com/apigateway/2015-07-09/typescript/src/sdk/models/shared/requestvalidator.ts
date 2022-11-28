import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RequestValidator
/** 
 * <p>A set of validation rules for incoming <a>Method</a> requests.</p> <div class="remarks"> <p>In OpenAPI, a <a>RequestValidator</a> of an API is defined by the <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions.html#api-gateway-swagger-extensions-request-validators.requestValidator.html">x-amazon-apigateway-request-validators.requestValidator</a> object. It the referenced using the <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions.html#api-gateway-swagger-extensions-request-validator">x-amazon-apigateway-request-validator</a> property.</p> </div> <div class="seeAlso"><a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-method-request-validation.html">Enable Basic Request Validation in API Gateway</a></div>
**/
export class RequestValidator extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=validateRequestBody" })
  validateRequestBody?: boolean;

  @SpeakeasyMetadata({ data: "json, name=validateRequestParameters" })
  validateRequestParameters?: boolean;
}
