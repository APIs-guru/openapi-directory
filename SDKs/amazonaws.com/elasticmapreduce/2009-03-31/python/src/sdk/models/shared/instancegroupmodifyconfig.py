from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import configuration
from . import shrinkpolicy


@dataclass_json
@dataclass
class InstanceGroupModifyConfig:
    configurations: Optional[List[configuration.Configuration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Configurations' }})
    ec2_instance_ids_to_terminate: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EC2InstanceIdsToTerminate' }})
    instance_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceCount' }})
    instance_group_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceGroupId' }})
    shrink_policy: Optional[shrinkpolicy.ShrinkPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShrinkPolicy' }})
    
