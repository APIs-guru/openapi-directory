from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Usage:
    r"""Usage
    <p>Represents the usage data of a usage plan.</p> <div class=\"remarks\"/> <div class=\"seeAlso\"> <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html\">Create and Use Usage Plans</a>, <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-create-usage-plans-with-console.html#api-gateway-usage-plan-manage-usage\">Manage Usage in a Usage Plan</a> </div>
    """
    
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate') }})
    items: Optional[dict[str, List[List[int]]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate') }})
    usage_plan_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usagePlanId') }})
    
