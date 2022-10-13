from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import partnereventsource


@dataclass_json
@dataclass
class ListPartnerEventSourcesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    partner_event_sources: Optional[List[partnereventsource.PartnerEventSource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PartnerEventSources' }})
    
