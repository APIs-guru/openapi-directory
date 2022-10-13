from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import logpattern


@dataclass_json
@dataclass
class DescribeLogPatternResponse:
    log_pattern: Optional[logpattern.LogPattern] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogPattern' }})
    resource_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceGroupName' }})
    
