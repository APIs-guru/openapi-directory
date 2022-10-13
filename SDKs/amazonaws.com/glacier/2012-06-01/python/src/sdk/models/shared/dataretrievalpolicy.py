from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dataretrievalrule


@dataclass_json
@dataclass
class DataRetrievalPolicy:
    rules: Optional[List[dataretrievalrule.DataRetrievalRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Rules' }})
    
