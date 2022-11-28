from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ServiceResourceCost:
    r"""ServiceResourceCost
    An object that contains information about the estimated monthly cost to analyze an AWS resource. For more information, see <a href=\"https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html\">Estimate your Amazon DevOps Guru costs</a> and <a href=\"http://aws.amazon.com/devops-guru/pricing/\">Amazon DevOps Guru pricing</a>.
    """
    
    cost: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Cost') }})
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Count') }})
    state: Optional[CostEstimationServiceResourceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    unit_cost: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnitCost') }})
    
