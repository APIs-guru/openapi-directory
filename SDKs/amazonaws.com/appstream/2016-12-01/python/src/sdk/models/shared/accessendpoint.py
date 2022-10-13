from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import accessendpointtype_enum


@dataclass_json
@dataclass
class AccessEndpoint:
    endpoint_type: accessendpointtype_enum.AccessEndpointTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointType' }})
    vpce_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpceId' }})
    
