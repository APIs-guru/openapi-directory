from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import devicedefinitionversion


@dataclass_json
@dataclass
class GetDeviceDefinitionVersionResponse:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    creation_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTimestamp' }})
    definition: Optional[devicedefinitionversion.DeviceDefinitionVersion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Definition' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    
