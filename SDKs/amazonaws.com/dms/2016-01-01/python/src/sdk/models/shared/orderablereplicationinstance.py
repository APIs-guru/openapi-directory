from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OrderableReplicationInstance:
    r"""OrderableReplicationInstance
    In response to the <code>DescribeOrderableReplicationInstances</code> operation, this object describes an available replication instance. This description includes the replication instance's type, engine version, and allocated storage.
    """
    
    availability_zones: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AvailabilityZones') }})
    default_allocated_storage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultAllocatedStorage') }})
    engine_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EngineVersion') }})
    included_allocated_storage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncludedAllocatedStorage') }})
    max_allocated_storage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxAllocatedStorage') }})
    min_allocated_storage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinAllocatedStorage') }})
    release_status: Optional[ReleaseStatusValuesEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReleaseStatus') }})
    replication_instance_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationInstanceClass') }})
    storage_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StorageType') }})
    
