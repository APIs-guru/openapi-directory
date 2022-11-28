from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UsagePlans:
    r"""UsagePlans
    <p>Represents a collection of usage plans for an AWS account.</p> <div class=\"seeAlso\"> <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html\">Create and Use Usage Plans</a> </div>
    """
    
    items: Optional[List[UsagePlan]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    
