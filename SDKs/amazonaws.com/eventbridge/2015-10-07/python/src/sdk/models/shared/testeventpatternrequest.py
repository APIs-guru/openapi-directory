from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TestEventPatternRequest:
    event: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Event') }})
    event_pattern: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventPattern') }})
    
