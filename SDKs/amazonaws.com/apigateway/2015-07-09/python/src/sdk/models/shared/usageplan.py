from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UsagePlan:
    r"""UsagePlan
    <p>Represents a usage plan than can specify who can assess associated API stages with specified request limits and quotas.</p> <div class=\"remarks\"> <p>In a usage plan, you associate an API by specifying the API's Id and a stage name of the specified API. You add plan customers by adding API keys to the plan. </p> </div> <div class=\"seeAlso\"> <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html\">Create and Use Usage Plans</a> </div>
    """
    
    api_stages: Optional[List[APIStage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiStages') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    product_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productCode') }})
    quota: Optional[QuotaSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quota') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    throttle: Optional[ThrottleSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('throttle') }})
    
