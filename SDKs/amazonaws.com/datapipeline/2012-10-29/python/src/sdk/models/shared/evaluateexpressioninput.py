from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EvaluateExpressionInput:
    expression: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expression' }})
    object_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectId' }})
    pipeline_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipelineId' }})
    
