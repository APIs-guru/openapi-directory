from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetWebhookResult:
    r"""GetWebhookResult
     The result structure for the get webhook request. 
    """
    
    webhook: Webhook = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhook') }})
    
