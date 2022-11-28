from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AddCustomAttributesRequest:
    r"""AddCustomAttributesRequest
    Represents the request to add custom attributes.
    """
    
    custom_attributes: List[SchemaAttributeType] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomAttributes') }})
    user_pool_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolId') }})
    
