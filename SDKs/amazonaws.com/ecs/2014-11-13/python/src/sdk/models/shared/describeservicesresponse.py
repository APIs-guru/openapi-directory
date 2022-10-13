from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import failure
from . import service


@dataclass_json
@dataclass
class DescribeServicesResponse:
    failures: Optional[List[failure.Failure]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failures' }})
    services: Optional[List[service.Service]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'services' }})
    
