from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetConfigResponse:
    config_cred: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigCred' }})
    config_file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigFile' }})
    config_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigType' }})
    
