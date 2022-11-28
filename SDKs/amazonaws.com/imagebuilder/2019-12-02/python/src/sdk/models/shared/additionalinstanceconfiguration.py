from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AdditionalInstanceConfiguration:
    r"""AdditionalInstanceConfiguration
    In addition to your infrastruction configuration, these settings provide an extra layer of control over your build instances. For instances where Image Builder installs the SSM agent, you can choose whether to keep it for the AMI that you create. You can also specify commands to run on launch for all of your build instances.
    """
    
    systems_manager_agent: Optional[SystemsManagerAgent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('systemsManagerAgent') }})
    user_data_override: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userDataOverride') }})
    
