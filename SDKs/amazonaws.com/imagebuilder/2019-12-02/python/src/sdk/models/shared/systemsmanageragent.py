from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SystemsManagerAgent:
    r"""SystemsManagerAgent
    Contains settings for the SSM agent on your build instance.
    """
    
    uninstall_after_build: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uninstallAfterBuild') }})
    
