from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import action
from . import eventsource
from . import parameters
from . import policytypevalues_enum
from . import resourcelocationvalues_enum
from . import resourcetypevalues_enum
from . import schedule
from . import tag


@dataclass_json
@dataclass
class PolicyDetails:
    actions: Optional[List[action.Action]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Actions' }})
    event_source: Optional[eventsource.EventSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventSource' }})
    parameters: Optional[parameters.Parameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parameters' }})
    policy_type: Optional[policytypevalues_enum.PolicyTypeValuesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyType' }})
    resource_locations: Optional[List[resourcelocationvalues_enum.ResourceLocationValuesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceLocations' }})
    resource_types: Optional[List[resourcetypevalues_enum.ResourceTypeValuesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceTypes' }})
    schedules: Optional[List[schedule.Schedule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Schedules' }})
    target_tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetTags' }})
    
