from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import cloudformationcollection


@dataclass_json
@dataclass
class ResourceCollection:
    cloud_formation: Optional[cloudformationcollection.CloudFormationCollection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudFormation' }})
    
