from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ApplyPendingMaintenanceActionMessage:
    apply_action: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplyAction' }})
    opt_in_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OptInType' }})
    replication_instance_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationInstanceArn' }})
    
