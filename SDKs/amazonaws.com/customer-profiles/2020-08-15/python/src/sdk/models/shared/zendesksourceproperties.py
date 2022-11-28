from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ZendeskSourceProperties:
    r"""ZendeskSourceProperties
    The properties that are applied when using Zendesk as a flow source.
    """
    
    object: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Object') }})
    
