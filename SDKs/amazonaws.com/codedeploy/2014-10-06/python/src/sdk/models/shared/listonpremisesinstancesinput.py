from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import registrationstatus_enum
from . import tagfilter


@dataclass_json
@dataclass
class ListOnPremisesInstancesInput:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    registration_status: Optional[registrationstatus_enum.RegistrationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registrationStatus' }})
    tag_filters: Optional[List[tagfilter.TagFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagFilters' }})
    
