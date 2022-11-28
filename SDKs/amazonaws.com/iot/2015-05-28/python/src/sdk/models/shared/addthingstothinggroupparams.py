from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AddThingsToThingGroupParams:
    r"""AddThingsToThingGroupParams
    Parameters used when defining a mitigation action that move a set of things to a thing group.
    """
    
    thing_group_names: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingGroupNames') }})
    override_dynamic_groups: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overrideDynamicGroups') }})
    
