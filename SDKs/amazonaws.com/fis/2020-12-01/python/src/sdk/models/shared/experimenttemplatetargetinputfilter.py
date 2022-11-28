from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ExperimentTemplateTargetInputFilter:
    r"""ExperimentTemplateTargetInputFilter
    Describes a filter used for the target resource input in an experiment template.
    """
    
    path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    values: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
