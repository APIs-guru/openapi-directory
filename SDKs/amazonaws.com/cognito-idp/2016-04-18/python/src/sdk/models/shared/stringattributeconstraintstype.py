from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class StringAttributeConstraintsType:
    r"""StringAttributeConstraintsType
    The constraints associated with a string attribute.
    """
    
    max_length: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxLength') }})
    min_length: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinLength') }})
    
