from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import propertydatatype_enum
from . import propertytype


@dataclass_json
@dataclass
class AssetModelPropertyDefinition:
    data_type: propertydatatype_enum.PropertyDataTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataType' }})
    data_type_spec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataTypeSpec' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: propertytype.PropertyType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit' }})
    
