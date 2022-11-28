from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TimeToLiveSpecification:
    r"""TimeToLiveSpecification
    Represents the settings used to enable or disable Time to Live (TTL) for the specified table.
    """
    
    attribute_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeName') }})
    enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Enabled') }})
    
