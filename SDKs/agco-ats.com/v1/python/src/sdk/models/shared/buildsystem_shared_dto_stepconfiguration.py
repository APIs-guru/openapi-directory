from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BuildSystemSharedDtoStepConfiguration:
    r"""BuildSystemSharedDtoStepConfiguration
    Step Configuration
    """
    
    step_implementation_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StepImplementationID') }})
    configurations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Configurations') }})
    
