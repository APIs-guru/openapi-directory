from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TimestreamTimestamp:
    r"""TimestreamTimestamp
    Describes how to interpret an application-defined timestamp value from an MQTT message payload and the precision of that value.
    """
    
    unit: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
