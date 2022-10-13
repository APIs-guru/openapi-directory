from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import connectiontype_enum
from . import physicalconnectionrequirements


@dataclass_json
@dataclass
class ConnectionInput:
    connection_properties: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectionProperties' }})
    connection_type: connectiontype_enum.ConnectionTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectionType' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    match_criteria: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MatchCriteria' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    physical_connection_requirements: Optional[physicalconnectionrequirements.PhysicalConnectionRequirements] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PhysicalConnectionRequirements' }})
    
