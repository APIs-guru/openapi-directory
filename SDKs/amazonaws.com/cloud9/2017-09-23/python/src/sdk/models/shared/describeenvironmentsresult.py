from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import environment


@dataclass_json
@dataclass
class DescribeEnvironmentsResult:
    environments: Optional[List[environment.Environment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environments' }})
    
