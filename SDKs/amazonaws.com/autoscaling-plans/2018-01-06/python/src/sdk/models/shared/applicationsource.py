from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tagfilter


@dataclass_json
@dataclass
class ApplicationSource:
    cloud_formation_stack_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudFormationStackARN' }})
    tag_filters: Optional[List[tagfilter.TagFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TagFilters' }})
    
