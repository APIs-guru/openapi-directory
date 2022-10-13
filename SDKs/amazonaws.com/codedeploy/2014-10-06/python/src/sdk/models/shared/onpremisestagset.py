from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tagfilter


@dataclass_json
@dataclass
class OnPremisesTagSet:
    on_premises_tag_set_list: Optional[List[List[tagfilter.TagFilter]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onPremisesTagSetList' }})
    
