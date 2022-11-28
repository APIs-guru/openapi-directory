from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CrossRegionCopyAction:
    r"""CrossRegionCopyAction
    Specifies a rule for copying shared snapshots across Regions.
    """
    
    encryption_configuration: EncryptionConfiguration = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionConfiguration') }})
    target: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Target') }})
    retain_rule: Optional[CrossRegionCopyRetainRule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetainRule') }})
    
