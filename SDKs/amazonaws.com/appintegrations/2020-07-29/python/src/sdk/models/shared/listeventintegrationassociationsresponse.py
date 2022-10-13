from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import eventintegrationassociation


@dataclass_json
@dataclass
class ListEventIntegrationAssociationsResponse:
    event_integration_associations: Optional[List[eventintegrationassociation.EventIntegrationAssociation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventIntegrationAssociations' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
