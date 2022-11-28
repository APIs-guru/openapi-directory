from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Queue:
    max_length: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxLength') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    region: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    ttl: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ttl') }})
    
