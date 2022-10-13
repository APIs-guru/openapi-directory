from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import attributedatatype_enum
from . import numberattributeconstraintstype
from . import stringattributeconstraintstype


@dataclass_json
@dataclass
class SchemaAttributeType:
    attribute_data_type: Optional[attributedatatype_enum.AttributeDataTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributeDataType' }})
    developer_only_attribute: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeveloperOnlyAttribute' }})
    mutable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Mutable' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    number_attribute_constraints: Optional[numberattributeconstraintstype.NumberAttributeConstraintsType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberAttributeConstraints' }})
    required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Required' }})
    string_attribute_constraints: Optional[stringattributeconstraintstype.StringAttributeConstraintsType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StringAttributeConstraints' }})
    
