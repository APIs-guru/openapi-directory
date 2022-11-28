from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MethodSnapshot:
    r"""MethodSnapshot
    Represents a summary of a <a>Method</a> resource, given a particular date and time.
    """
    
    api_key_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiKeyRequired') }})
    authorization_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizationType') }})
    
