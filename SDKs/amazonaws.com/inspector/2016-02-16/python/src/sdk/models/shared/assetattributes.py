from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import networkinterface
from . import tag


@dataclass_json
@dataclass
class AssetAttributes:
    agent_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agentId' }})
    ami_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amiId' }})
    auto_scaling_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoScalingGroup' }})
    hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostname' }})
    ipv4_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipv4Addresses' }})
    network_interfaces: Optional[List[networkinterface.NetworkInterface]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkInterfaces' }})
    schema_version: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemaVersion' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
