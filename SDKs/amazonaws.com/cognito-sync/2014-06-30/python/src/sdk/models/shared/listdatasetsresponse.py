from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dataset


@dataclass_json
@dataclass
class ListDatasetsResponse:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Count' }})
    datasets: Optional[List[dataset.Dataset]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Datasets' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
