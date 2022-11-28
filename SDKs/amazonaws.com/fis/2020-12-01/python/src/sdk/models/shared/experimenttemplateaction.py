from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ExperimentTemplateAction:
    r"""ExperimentTemplateAction
    Describes an action for an experiment template.
    """
    
    action_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionId') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    start_after: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startAfter') }})
    targets: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targets') }})
    
