from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import autoscalinggroupprovider
from . import capacityproviderstatus_enum
from . import tag
from . import capacityproviderupdatestatus_enum


@dataclass_json
@dataclass
class CapacityProvider:
    auto_scaling_group_provider: Optional[autoscalinggroupprovider.AutoScalingGroupProvider] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoScalingGroupProvider' }})
    capacity_provider_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capacityProviderArn' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    status: Optional[capacityproviderstatus_enum.CapacityProviderStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    update_status: Optional[capacityproviderupdatestatus_enum.CapacityProviderUpdateStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateStatus' }})
    update_status_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateStatusReason' }})
    
