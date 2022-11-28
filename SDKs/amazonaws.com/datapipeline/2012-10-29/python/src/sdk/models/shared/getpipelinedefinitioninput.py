from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetPipelineDefinitionInput:
    r"""GetPipelineDefinitionInput
    Contains the parameters for GetPipelineDefinition.
    """
    
    pipeline_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineId') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
