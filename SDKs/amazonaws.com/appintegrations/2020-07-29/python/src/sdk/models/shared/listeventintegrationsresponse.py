from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import eventintegration


@dataclass_json
@dataclass
class ListEventIntegrationsResponse:
    event_integrations: Optional[List[eventintegration.EventIntegration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventIntegrations' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
