from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import pipeline


@dataclass_json
@dataclass
class ListPipelinesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextPageToken' }})
    pipelines: Optional[List[pipeline.Pipeline]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Pipelines' }})
    
