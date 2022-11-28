from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeleteWebhookResult:
    r"""DeleteWebhookResult
     The result structure for the delete webhook request. 
    """
    
    webhook: Webhook = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhook') }})
    
