from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import replicationendpointtypevalue_enum


@dataclass_json
@dataclass
class SupportedEndpointType:
    endpoint_type: Optional[replicationendpointtypevalue_enum.ReplicationEndpointTypeValueEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointType' }})
    engine_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EngineDisplayName' }})
    engine_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EngineName' }})
    replication_instance_engine_minimum_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationInstanceEngineMinimumVersion' }})
    supports_cdc: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportsCDC' }})
    
