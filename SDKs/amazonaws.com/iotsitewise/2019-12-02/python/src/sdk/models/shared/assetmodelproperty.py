from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AssetModelProperty:
    r"""AssetModelProperty
    Contains information about an asset model property.
    """
    
    data_type: PropertyDataTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataType') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: PropertyType = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    data_type_spec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataTypeSpec') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    
