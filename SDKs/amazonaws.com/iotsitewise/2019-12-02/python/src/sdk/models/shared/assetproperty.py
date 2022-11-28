from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AssetProperty:
    r"""AssetProperty
    Contains asset property information.
    """
    
    data_type: PropertyDataTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataType') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alias') }})
    data_type_spec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataTypeSpec') }})
    notification: Optional[PropertyNotification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notification') }})
    unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    
