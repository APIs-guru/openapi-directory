from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import tier_enum


@dataclass_json
@dataclass
class DescribeComponentConfigurationRecommendationRequest:
    component_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComponentName' }})
    resource_group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceGroupName' }})
    tier: tier_enum.TierEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tier' }})
    
