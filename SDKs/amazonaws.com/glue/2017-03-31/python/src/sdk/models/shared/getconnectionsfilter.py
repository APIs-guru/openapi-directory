from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import connectiontype_enum


@dataclass_json
@dataclass
class GetConnectionsFilter:
    connection_type: Optional[connectiontype_enum.ConnectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectionType' }})
    match_criteria: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MatchCriteria' }})
    
