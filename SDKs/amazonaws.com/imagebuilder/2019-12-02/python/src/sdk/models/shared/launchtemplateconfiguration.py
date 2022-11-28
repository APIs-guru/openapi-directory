from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LaunchTemplateConfiguration:
    r"""LaunchTemplateConfiguration
    Identifies an Amazon EC2 launch template to use for a specific account.
    """
    
    launch_template_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchTemplateId') }})
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    set_default_version: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('setDefaultVersion') }})
    
