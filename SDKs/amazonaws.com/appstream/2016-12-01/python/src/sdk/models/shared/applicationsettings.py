from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ApplicationSettings:
    r"""ApplicationSettings
    The persistent application settings for users of a stack.
    """
    
    enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Enabled') }})
    settings_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SettingsGroup') }})
    
