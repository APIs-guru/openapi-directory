from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AdminUpdateUserAttributesRequest:
    r"""AdminUpdateUserAttributesRequest
    Represents the request to update the user's attributes as an administrator.
    """
    
    user_attributes: List[AttributeType] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserAttributes') }})
    user_pool_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolId') }})
    username: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Username') }})
    client_metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientMetadata') }})
    
