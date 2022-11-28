from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BootstrapActionDetail:
    r"""BootstrapActionDetail
    Reports the configuration of a bootstrap action in a cluster (job flow).
    """
    
    bootstrap_action_config: Optional[BootstrapActionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BootstrapActionConfig') }})
    
