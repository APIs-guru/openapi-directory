from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EventSelector:
    r"""EventSelector
    <p>Use event selectors to further specify the management and data event settings for your trail. By default, trails created without specific event selectors will be configured to log all read and write management events, and no data events. When an event occurs in your account, CloudTrail evaluates the event selector for all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event.</p> <p>You can configure up to five event selectors for a trail.</p> <p>You cannot apply both event selectors and advanced event selectors to a trail.</p>
    """
    
    data_resources: Optional[List[DataResource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataResources') }})
    exclude_management_event_sources: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExcludeManagementEventSources') }})
    include_management_events: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncludeManagementEvents') }})
    read_write_type: Optional[ReadWriteTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReadWriteType') }})
    
