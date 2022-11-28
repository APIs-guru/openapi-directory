from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AcknowledgeFlow:
    r"""AcknowledgeFlow
    Specifies whether to get notified for alarm state changes.
    """
    
    enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    
