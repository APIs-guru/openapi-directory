from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeviceConfigurationType:
    r"""DeviceConfigurationType
    The configuration for the user pool's device tracking.
    """
    
    challenge_required_on_new_device: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChallengeRequiredOnNewDevice') }})
    device_only_remembered_on_user_prompt: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceOnlyRememberedOnUserPrompt') }})
    
