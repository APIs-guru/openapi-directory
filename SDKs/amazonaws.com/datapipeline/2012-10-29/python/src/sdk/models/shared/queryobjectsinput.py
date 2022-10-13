from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import query


@dataclass_json
@dataclass
class QueryObjectsInput:
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marker' }})
    pipeline_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipelineId' }})
    query: Optional[query.Query] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    sphere: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sphere' }})
    
