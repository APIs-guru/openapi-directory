from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SlackSourceProperties:
    r"""SlackSourceProperties
     The properties that are applied when Slack is being used as a source. 
    """
    
    object: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    
