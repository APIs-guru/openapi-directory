from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RunCommandTarget:
    r"""RunCommandTarget
    Information about the EC2 instances that are to be sent the command, specified as key-value pairs. Each <code>RunCommandTarget</code> block can include only one key, but this key may specify multiple values.
    """
    
    key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    values: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Values') }})
    
