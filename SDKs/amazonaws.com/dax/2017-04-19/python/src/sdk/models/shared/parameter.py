from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import changetype_enum
from . import ismodifiable_enum
from . import nodetypespecificvalue
from . import parametertype_enum


@dataclass_json
@dataclass
class Parameter:
    allowed_values: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowedValues' }})
    change_type: Optional[changetype_enum.ChangeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChangeType' }})
    data_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataType' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    is_modifiable: Optional[ismodifiable_enum.IsModifiableEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsModifiable' }})
    node_type_specific_values: Optional[List[nodetypespecificvalue.NodeTypeSpecificValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NodeTypeSpecificValues' }})
    parameter_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParameterName' }})
    parameter_type: Optional[parametertype_enum.ParameterTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParameterType' }})
    parameter_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParameterValue' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Source' }})
    
