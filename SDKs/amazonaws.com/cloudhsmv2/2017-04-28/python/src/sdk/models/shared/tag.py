from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Tag:
    r"""Tag
    Contains a tag. A tag is a key-value pair.
    """
    
    key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
