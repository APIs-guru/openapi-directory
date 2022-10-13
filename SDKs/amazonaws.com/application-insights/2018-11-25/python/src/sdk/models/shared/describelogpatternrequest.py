from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeLogPatternRequest:
    pattern_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PatternName' }})
    pattern_set_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PatternSetName' }})
    resource_group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceGroupName' }})
    
