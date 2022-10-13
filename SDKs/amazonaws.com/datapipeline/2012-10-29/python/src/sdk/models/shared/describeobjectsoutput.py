from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import pipelineobject


@dataclass_json
@dataclass
class DescribeObjectsOutput:
    has_more_results: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasMoreResults' }})
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marker' }})
    pipeline_objects: List[pipelineobject.PipelineObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipelineObjects' }})
    
