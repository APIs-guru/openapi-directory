from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AdminCreateUserRequest:
    r"""AdminCreateUserRequest
    Represents the request to create a user in the specified user pool.
    """
    
    user_pool_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolId') }})
    username: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Username') }})
    client_metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientMetadata') }})
    desired_delivery_mediums: Optional[List[DeliveryMediumTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DesiredDeliveryMediums') }})
    force_alias_creation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ForceAliasCreation') }})
    message_action: Optional[MessageActionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MessageAction') }})
    temporary_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemporaryPassword') }})
    user_attributes: Optional[List[AttributeType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserAttributes') }})
    validation_data: Optional[List[AttributeType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationData') }})
    
