from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import cloudformationcollectionfilter


@dataclass_json
@dataclass
class ResourceCollectionFilter:
    cloud_formation: Optional[cloudformationcollectionfilter.CloudFormationCollectionFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudFormation' }})
    
