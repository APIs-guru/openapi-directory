from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeParametersRequest:
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    parameter_group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParameterGroupName' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Source' }})
    
