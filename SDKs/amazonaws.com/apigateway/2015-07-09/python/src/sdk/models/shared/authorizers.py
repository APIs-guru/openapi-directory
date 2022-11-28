from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Authorizers:
    r"""Authorizers
    <p>Represents a collection of <a>Authorizer</a> resources.</p> <div class=\"seeAlso\"> <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html\">Use Lambda Function as Authorizer</a> <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html\">Use Cognito User Pool as Authorizer</a> </div>
    """
    
    items: Optional[List[Authorizer]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    
