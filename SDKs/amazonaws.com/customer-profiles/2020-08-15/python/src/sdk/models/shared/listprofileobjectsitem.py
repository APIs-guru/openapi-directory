from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ListProfileObjectsItem:
    r"""ListProfileObjectsItem
    A ProfileObject in a list of ProfileObjects.
    """
    
    object: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Object') }})
    object_type_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectTypeName') }})
    profile_object_unique_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProfileObjectUniqueKey') }})
    
