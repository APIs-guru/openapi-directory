from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ApplyPendingMaintenanceActionMessage:
    r"""ApplyPendingMaintenanceActionMessage
    <p/>
    """
    
    apply_action: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplyAction') }})
    opt_in_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OptInType') }})
    replication_instance_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationInstanceArn') }})
    
