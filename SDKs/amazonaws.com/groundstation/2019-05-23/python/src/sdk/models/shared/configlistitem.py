from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import configcapabilitytype_enum


@dataclass_json
@dataclass
class ConfigListItem:
    config_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configArn' }})
    config_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configId' }})
    config_type: Optional[configcapabilitytype_enum.ConfigCapabilityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configType' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
