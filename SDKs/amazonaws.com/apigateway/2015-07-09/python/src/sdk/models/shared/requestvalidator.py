from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RequestValidator:
    r"""RequestValidator
    <p>A set of validation rules for incoming <a>Method</a> requests.</p> <div class=\"remarks\"> <p>In OpenAPI, a <a>RequestValidator</a> of an API is defined by the <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions.html#api-gateway-swagger-extensions-request-validators.requestValidator.html\">x-amazon-apigateway-request-validators.requestValidator</a> object. It the referenced using the <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions.html#api-gateway-swagger-extensions-request-validator\">x-amazon-apigateway-request-validator</a> property.</p> </div> <div class=\"seeAlso\"><a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-method-request-validation.html\">Enable Basic Request Validation in API Gateway</a></div>
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    validate_request_body: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validateRequestBody') }})
    validate_request_parameters: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validateRequestParameters') }})
    
