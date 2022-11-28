from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TimestampPartition:
    r"""TimestampPartition
     A partition dimension defined by a timestamp attribute. 
    """
    
    attribute_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributeName') }})
    timestamp_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestampFormat') }})
    
