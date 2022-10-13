from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ConfirmDeviceResponse:
    user_confirmation_necessary: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserConfirmationNecessary' }})
    
