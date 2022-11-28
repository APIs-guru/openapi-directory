from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UsagePlanKey:
    r"""UsagePlanKey
    <p>Represents a usage plan key to identify a plan customer.</p> <div class=\"remarks\"> <p>To associate an API stage with a selected API key in a usage plan, you must create a UsagePlanKey resource to represent the selected <a>ApiKey</a>.</p> </div>\" <div class=\"seeAlso\"> <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html\">Create and Use Usage Plans</a> </div>
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
