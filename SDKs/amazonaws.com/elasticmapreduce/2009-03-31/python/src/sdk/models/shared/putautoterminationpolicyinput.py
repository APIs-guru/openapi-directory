from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutAutoTerminationPolicyInput:
    cluster_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterId') }})
    auto_termination_policy: Optional[AutoTerminationPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoTerminationPolicy') }})
    
