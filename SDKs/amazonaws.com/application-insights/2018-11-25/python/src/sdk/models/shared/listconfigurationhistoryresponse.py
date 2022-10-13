from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import configurationevent


@dataclass_json
@dataclass
class ListConfigurationHistoryResponse:
    event_list: Optional[List[configurationevent.ConfigurationEvent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
