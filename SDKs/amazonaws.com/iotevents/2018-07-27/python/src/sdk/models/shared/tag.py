from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Tag:
    r"""Tag
    Metadata that can be used to manage the resource.
    """
    
    key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
