from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Exclusion:
    r"""Exclusion
    Contains information about what was excluded from an assessment run.
    """
    
    arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    recommendation: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendation') }})
    scopes: List[Scope] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopes') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    attributes: Optional[List[Attribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    
