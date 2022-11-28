from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateWebhookResult:
    r"""UpdateWebhookResult
     The result structure for the update webhook request. 
    """
    
    webhook: Webhook = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhook') }})
    
