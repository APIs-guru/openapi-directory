from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeComponentConfigurationRequest:
    component_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComponentName' }})
    resource_group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceGroupName' }})
    
