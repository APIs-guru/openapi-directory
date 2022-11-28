from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ServiceHealth:
    r"""ServiceHealth
    Represents the health of an AWS service.
    """
    
    insight: Optional[ServiceInsightHealth] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Insight') }})
    service_name: Optional[ServiceNameEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceName') }})
    
