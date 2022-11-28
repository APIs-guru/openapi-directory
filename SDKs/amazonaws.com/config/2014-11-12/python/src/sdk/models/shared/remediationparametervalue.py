from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RemediationParameterValue:
    r"""RemediationParameterValue
    The value is either a dynamic (resource) value or a static value. You must select either a dynamic value or a static value.
    """
    
    resource_value: Optional[ResourceValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceValue') }})
    static_value: Optional[StaticValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StaticValue') }})
    
