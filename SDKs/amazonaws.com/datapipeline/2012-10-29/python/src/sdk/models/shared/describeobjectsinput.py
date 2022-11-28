from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DescribeObjectsInput:
    r"""DescribeObjectsInput
    Contains the parameters for DescribeObjects.
    """
    
    object_ids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectIds') }})
    pipeline_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineId') }})
    evaluate_expressions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluateExpressions') }})
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marker') }})
    
