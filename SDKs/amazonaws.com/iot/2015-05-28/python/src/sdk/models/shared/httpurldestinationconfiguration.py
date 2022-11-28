from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class HTTPURLDestinationConfiguration:
    r"""HTTPURLDestinationConfiguration
    HTTP URL destination configuration used by the topic rule's HTTP action.
    """
    
    confirmation_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('confirmationUrl') }})
    
