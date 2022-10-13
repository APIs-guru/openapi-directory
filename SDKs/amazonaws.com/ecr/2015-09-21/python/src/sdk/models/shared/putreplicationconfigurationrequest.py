from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import replicationconfiguration


@dataclass_json
@dataclass
class PutReplicationConfigurationRequest:
    replication_configuration: replicationconfiguration.ReplicationConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replicationConfiguration' }})
    
