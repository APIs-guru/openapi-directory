from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExclusionPreview:
    r"""ExclusionPreview
    Contains information about what is excluded from an assessment run given the current state of the assessment template.
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    recommendation: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendation') }})
    scopes: List[Scope] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopes') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    attributes: Optional[List[Attribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    
