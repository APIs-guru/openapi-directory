from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteLogPatternRequest:
    pattern_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PatternName') }})
    pattern_set_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PatternSetName') }})
    resource_group_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceGroupName') }})
    
