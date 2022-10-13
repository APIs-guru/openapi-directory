from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datasetsummary


@dataclass_json
@dataclass
class ListDatasetsResponse:
    dataset_summaries: Optional[List[datasetsummary.DatasetSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasetSummaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
