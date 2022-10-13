from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import resourcecollectionfilter


@dataclass_json
@dataclass
class GetResourceCollectionResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    resource_collection: Optional[resourcecollectionfilter.ResourceCollectionFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceCollection' }})
    
