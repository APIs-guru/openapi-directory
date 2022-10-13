from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import releasestatusvalues_enum


@dataclass_json
@dataclass
class OrderableReplicationInstance:
    availability_zones: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AvailabilityZones' }})
    default_allocated_storage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultAllocatedStorage' }})
    engine_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EngineVersion' }})
    included_allocated_storage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncludedAllocatedStorage' }})
    max_allocated_storage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxAllocatedStorage' }})
    min_allocated_storage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinAllocatedStorage' }})
    release_status: Optional[releasestatusvalues_enum.ReleaseStatusValuesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReleaseStatus' }})
    replication_instance_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationInstanceClass' }})
    storage_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StorageType' }})
    
