from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SecurityProfileTarget:
    r"""SecurityProfileTarget
    A target to which an alert is sent when a security profile behavior is violated.
    """
    
    arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    
