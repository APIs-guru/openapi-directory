from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AdvancedFieldSelector:
    r"""AdvancedFieldSelector
    A single selector statement in an advanced event selector.
    """
    
    field: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Field') }})
    ends_with: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndsWith') }})
    equals: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Equals') }})
    not_ends_with: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotEndsWith') }})
    not_equals: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotEquals') }})
    not_starts_with: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotStartsWith') }})
    starts_with: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartsWith') }})
    
