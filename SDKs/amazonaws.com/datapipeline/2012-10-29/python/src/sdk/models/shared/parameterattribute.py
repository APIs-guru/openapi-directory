from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ParameterAttribute:
    r"""ParameterAttribute
    The attributes allowed or specified with a parameter object.
    """
    
    key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    string_value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringValue') }})
    
