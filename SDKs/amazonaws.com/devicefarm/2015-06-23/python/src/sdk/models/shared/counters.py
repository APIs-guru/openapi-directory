from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Counters:
    r"""Counters
    Represents entity counters.
    """
    
    errored: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errored') }})
    failed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failed') }})
    passed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passed') }})
    skipped: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipped') }})
    stopped: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stopped') }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    warned: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warned') }})
    
