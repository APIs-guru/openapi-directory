from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RebootReplicationInstanceMessage:
    replication_instance_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationInstanceArn') }})
    force_failover: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ForceFailover') }})
    force_planned_failover: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ForcePlannedFailover') }})
    
