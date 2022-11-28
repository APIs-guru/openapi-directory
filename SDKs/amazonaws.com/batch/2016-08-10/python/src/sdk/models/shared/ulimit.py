from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Ulimit:
    r"""Ulimit
    <p>The <code>ulimit</code> settings to pass to the container.</p> <note> <p>This object isn't applicable to jobs that are running on Fargate resources.</p> </note>
    """
    
    hard_limit: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hardLimit') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    soft_limit: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('softLimit') }})
    
