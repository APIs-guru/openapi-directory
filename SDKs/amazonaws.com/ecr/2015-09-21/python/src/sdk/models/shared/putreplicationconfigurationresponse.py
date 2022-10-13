from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import replicationconfiguration


@dataclass_json
@dataclass
class PutReplicationConfigurationResponse:
    replication_configuration: Optional[replicationconfiguration.ReplicationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replicationConfiguration' }})
    
