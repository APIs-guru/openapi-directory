from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutItemOutput:
    attributes: Optional[dict[str, AttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    consumed_capacity_units: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsumedCapacityUnits') }})
    
