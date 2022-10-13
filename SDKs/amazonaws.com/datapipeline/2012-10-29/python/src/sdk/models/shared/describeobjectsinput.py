from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeObjectsInput:
    evaluate_expressions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evaluateExpressions' }})
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marker' }})
    object_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectIds' }})
    pipeline_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipelineId' }})
    
