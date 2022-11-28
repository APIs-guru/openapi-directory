from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AggregationConfig:
    r"""AggregationConfig
     The aggregation settings that you can use to customize the output format of your flow data. 
    """
    
    aggregation_type: Optional[AggregationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregationType') }})
    
