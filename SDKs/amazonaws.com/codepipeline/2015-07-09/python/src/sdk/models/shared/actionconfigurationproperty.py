from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ActionConfigurationProperty:
    r"""ActionConfigurationProperty
    Represents information about an action configuration property.
    """
    
    key: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    required: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('required') }})
    secret: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    queryable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryable') }})
    type: Optional[ActionConfigurationPropertyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
