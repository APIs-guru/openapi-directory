from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RebootReplicationInstanceMessage:
    force_failover: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ForceFailover' }})
    force_planned_failover: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ForcePlannedFailover' }})
    replication_instance_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationInstanceArn' }})
    
