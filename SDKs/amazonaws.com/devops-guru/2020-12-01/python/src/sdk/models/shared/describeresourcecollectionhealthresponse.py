from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import cloudformationhealth
from . import servicehealth


@dataclass_json
@dataclass
class DescribeResourceCollectionHealthResponse:
    cloud_formation: List[cloudformationhealth.CloudFormationHealth] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudFormation' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    service: Optional[List[servicehealth.ServiceHealth]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Service' }})
    
