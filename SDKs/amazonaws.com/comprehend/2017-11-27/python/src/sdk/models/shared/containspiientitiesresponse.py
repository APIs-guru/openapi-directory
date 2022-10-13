from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import entitylabel


@dataclass_json
@dataclass
class ContainsPiiEntitiesResponse:
    labels: Optional[List[entitylabel.EntityLabel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Labels' }})
    
