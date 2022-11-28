from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RequestValidators:
    r"""RequestValidators
    <p>A collection of <a>RequestValidator</a> resources of a given <a>RestApi</a>.</p> <div class=\"remarks\"> <p>In OpenAPI, the <a>RequestValidators</a> of an API is defined by the <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions.html#api-gateway-swagger-extensions-request-validators.html\">x-amazon-apigateway-request-validators</a> extension.</p> </div> <div class=\"seeAlso\"><a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-method-request-validation.html\">Enable Basic Request Validation in API Gateway</a></div>
    """
    
    items: Optional[List[RequestValidator]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    
