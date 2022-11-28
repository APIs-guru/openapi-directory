from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InlineArchiveRule:
    r"""InlineArchiveRule
    An criterion statement in an archive rule. Each archive rule may have multiple criteria.
    """
    
    filter: dict[str, Criterion] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    rule_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleName') }})
    
