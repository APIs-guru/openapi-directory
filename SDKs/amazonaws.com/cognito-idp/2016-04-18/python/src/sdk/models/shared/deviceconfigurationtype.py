from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeviceConfigurationType:
    challenge_required_on_new_device: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChallengeRequiredOnNewDevice' }})
    device_only_remembered_on_user_prompt: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceOnlyRememberedOnUserPrompt' }})
    
