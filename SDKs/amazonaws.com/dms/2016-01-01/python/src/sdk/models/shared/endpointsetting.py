from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import endpointsettingtypevalue_enum


@dataclass_json
@dataclass
class EndpointSetting:
    applicability: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Applicability' }})
    default_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultValue' }})
    enum_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnumValues' }})
    int_value_max: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IntValueMax' }})
    int_value_min: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IntValueMin' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    sensitive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Sensitive' }})
    type: Optional[endpointsettingtypevalue_enum.EndpointSettingTypeValueEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    units: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Units' }})
    
