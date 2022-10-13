from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import replicaautoscalingdescription
from . import tablestatus_enum


@dataclass_json
@dataclass
class TableAutoScalingDescription:
    replicas: Optional[List[replicaautoscalingdescription.ReplicaAutoScalingDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Replicas' }})
    table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableName' }})
    table_status: Optional[tablestatus_enum.TableStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableStatus' }})
    
