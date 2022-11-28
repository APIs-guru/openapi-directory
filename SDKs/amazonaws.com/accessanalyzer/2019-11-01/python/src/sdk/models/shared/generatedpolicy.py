from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GeneratedPolicy:
    r"""GeneratedPolicy
    Contains the text for the generated policy.
    """
    
    policy: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    
