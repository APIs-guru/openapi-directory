from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import replicationconfiguration


@dataclass_json
@dataclass
class DescribeRegistryResponse:
    registry_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registryId' }})
    replication_configuration: Optional[replicationconfiguration.ReplicationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replicationConfiguration' }})
    
