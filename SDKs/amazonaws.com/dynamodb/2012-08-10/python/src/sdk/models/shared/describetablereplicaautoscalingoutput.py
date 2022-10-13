from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import tableautoscalingdescription


@dataclass_json
@dataclass
class DescribeTableReplicaAutoScalingOutput:
    table_auto_scaling_description: Optional[tableautoscalingdescription.TableAutoScalingDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableAutoScalingDescription' }})
    
