from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datasetcontentsummary


@dataclass_json
@dataclass
class ListDatasetContentsResponse:
    dataset_content_summaries: Optional[List[datasetcontentsummary.DatasetContentSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasetContentSummaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
