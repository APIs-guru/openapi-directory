from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TimestreamDimension:
    r"""TimestreamDimension
    Metadata attributes of the time series that are written in each measure record.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
