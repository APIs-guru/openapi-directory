from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SchemaAttributeType:
    r"""SchemaAttributeType
    Contains information about the schema attribute.
    """
    
    attribute_data_type: Optional[AttributeDataTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeDataType') }})
    developer_only_attribute: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeveloperOnlyAttribute') }})
    mutable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mutable') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    number_attribute_constraints: Optional[NumberAttributeConstraintsType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberAttributeConstraints') }})
    required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Required') }})
    string_attribute_constraints: Optional[StringAttributeConstraintsType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StringAttributeConstraints') }})
    
