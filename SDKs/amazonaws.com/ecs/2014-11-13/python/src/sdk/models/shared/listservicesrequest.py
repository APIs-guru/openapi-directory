from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import launchtype_enum
from . import schedulingstrategy_enum


@dataclass_json
@dataclass
class ListServicesRequest:
    cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster' }})
    launch_type: Optional[launchtype_enum.LaunchTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchType' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    scheduling_strategy: Optional[schedulingstrategy_enum.SchedulingStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schedulingStrategy' }})
    
