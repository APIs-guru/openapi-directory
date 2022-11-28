from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EvaluateExpressionInput:
    r"""EvaluateExpressionInput
    Contains the parameters for EvaluateExpression.
    """
    
    expression: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expression') }})
    object_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectId') }})
    pipeline_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineId') }})
    
