from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CrossRegionCopyRule:
    r"""CrossRegionCopyRule
    Specifies a rule for cross-Region snapshot copies.
    """
    
    encrypted: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Encrypted') }})
    cmk_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CmkArn') }})
    copy_tags: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CopyTags') }})
    deprecate_rule: Optional[CrossRegionCopyDeprecateRule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeprecateRule') }})
    retain_rule: Optional[CrossRegionCopyRetainRule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetainRule') }})
    target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Target') }})
    target_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetRegion') }})
    
