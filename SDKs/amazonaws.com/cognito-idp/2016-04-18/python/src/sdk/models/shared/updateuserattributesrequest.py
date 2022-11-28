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
class UpdateUserAttributesRequest:
    r"""UpdateUserAttributesRequest
    Represents the request to update user attributes.
    """
    
    access_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessToken') }})
    user_attributes: List[AttributeType] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserAttributes') }})
    client_metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientMetadata') }})
    
