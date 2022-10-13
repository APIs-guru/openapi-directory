from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import deliverymediumtype_enum
from . import messageactiontype_enum
from . import attributetype
from . import attributetype


@dataclass_json
@dataclass
class AdminCreateUserRequest:
    client_metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientMetadata' }})
    desired_delivery_mediums: Optional[List[deliverymediumtype_enum.DeliveryMediumTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DesiredDeliveryMediums' }})
    force_alias_creation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ForceAliasCreation' }})
    message_action: Optional[messageactiontype_enum.MessageActionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MessageAction' }})
    temporary_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemporaryPassword' }})
    user_attributes: Optional[List[attributetype.AttributeType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserAttributes' }})
    user_pool_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserPoolId' }})
    username: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Username' }})
    validation_data: Optional[List[attributetype.AttributeType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValidationData' }})
    
