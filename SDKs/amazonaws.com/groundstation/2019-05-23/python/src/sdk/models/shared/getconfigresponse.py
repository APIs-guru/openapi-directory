from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import configtypedata
from . import configcapabilitytype_enum


@dataclass_json
@dataclass
class GetConfigResponse:
    config_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configArn' }})
    config_data: configtypedata.ConfigTypeData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configData' }})
    config_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configId' }})
    config_type: Optional[configcapabilitytype_enum.ConfigCapabilityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configType' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
