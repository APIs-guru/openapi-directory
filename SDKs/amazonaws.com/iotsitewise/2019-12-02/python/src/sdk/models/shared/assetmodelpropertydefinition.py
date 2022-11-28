from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AssetModelPropertyDefinition:
    r"""AssetModelPropertyDefinition
    Contains an asset model property definition. This property definition is applied to all assets created from the asset model.
    """
    
    data_type: PropertyDataTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataType') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: PropertyType = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    data_type_spec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataTypeSpec') }})
    unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    
