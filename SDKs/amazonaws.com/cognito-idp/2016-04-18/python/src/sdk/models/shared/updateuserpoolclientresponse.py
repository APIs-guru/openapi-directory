from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateUserPoolClientResponse:
    r"""UpdateUserPoolClientResponse
    Represents the response from the server to the request to update the user pool client.
    """
    
    user_pool_client: Optional[UserPoolClientType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolClient') }})
    
