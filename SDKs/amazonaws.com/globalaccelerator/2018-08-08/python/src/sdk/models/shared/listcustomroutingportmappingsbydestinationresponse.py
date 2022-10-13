from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import destinationportmapping


@dataclass_json
@dataclass
class ListCustomRoutingPortMappingsByDestinationResponse:
    destination_port_mappings: Optional[List[destinationportmapping.DestinationPortMapping]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationPortMappings' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
