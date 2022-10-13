from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import connectorentity


@dataclass_json
@dataclass
class ListConnectorEntitiesResponse:
    connector_entity_map: dict[str, List[connectorentity.ConnectorEntity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectorEntityMap' }})
    
