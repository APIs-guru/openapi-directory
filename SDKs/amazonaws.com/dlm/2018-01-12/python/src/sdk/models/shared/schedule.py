from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import createrule
from . import crossregioncopyrule
from . import deprecaterule
from . import fastrestorerule
from . import retainrule
from . import sharerule
from . import tag
from . import tag


@dataclass_json
@dataclass
class Schedule:
    copy_tags: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CopyTags' }})
    create_rule: Optional[createrule.CreateRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreateRule' }})
    cross_region_copy_rules: Optional[List[crossregioncopyrule.CrossRegionCopyRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CrossRegionCopyRules' }})
    deprecate_rule: Optional[deprecaterule.DeprecateRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeprecateRule' }})
    fast_restore_rule: Optional[fastrestorerule.FastRestoreRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FastRestoreRule' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    retain_rule: Optional[retainrule.RetainRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RetainRule' }})
    share_rules: Optional[List[sharerule.ShareRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShareRules' }})
    tags_to_add: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TagsToAdd' }})
    variable_tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VariableTags' }})
    
