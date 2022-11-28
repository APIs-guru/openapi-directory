from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ModifyReplicationInstanceMessage:
    r"""ModifyReplicationInstanceMessage
    <p/>
    """
    
    replication_instance_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationInstanceArn') }})
    allocated_storage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllocatedStorage') }})
    allow_major_version_upgrade: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowMajorVersionUpgrade') }})
    apply_immediately: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplyImmediately') }})
    auto_minor_version_upgrade: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoMinorVersionUpgrade') }})
    engine_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EngineVersion') }})
    multi_az: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MultiAZ') }})
    preferred_maintenance_window: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreferredMaintenanceWindow') }})
    replication_instance_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationInstanceClass') }})
    replication_instance_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationInstanceIdentifier') }})
    vpc_security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcSecurityGroupIds') }})
    
