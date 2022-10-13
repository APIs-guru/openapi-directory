from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LaunchTemplateConfiguration:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    launch_template_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchTemplateId' }})
    set_default_version: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'setDefaultVersion' }})
    
