from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExperimentTemplateTarget:
    r"""ExperimentTemplateTarget
    Describes a target for an experiment template.
    """
    
    filters: Optional[List[ExperimentTemplateTargetFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    resource_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceArns') }})
    resource_tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceTags') }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    selection_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectionMode') }})
    
