from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Schedule:
    r"""Schedule
    Specifies a backup schedule for a snapshot or AMI lifecycle policy.
    """
    
    copy_tags: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CopyTags') }})
    create_rule: Optional[CreateRule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateRule') }})
    cross_region_copy_rules: Optional[List[CrossRegionCopyRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CrossRegionCopyRules') }})
    deprecate_rule: Optional[DeprecateRule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeprecateRule') }})
    fast_restore_rule: Optional[FastRestoreRule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FastRestoreRule') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    retain_rule: Optional[RetainRule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetainRule') }})
    share_rules: Optional[List[ShareRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShareRules') }})
    tags_to_add: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagsToAdd') }})
    variable_tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VariableTags') }})
    
