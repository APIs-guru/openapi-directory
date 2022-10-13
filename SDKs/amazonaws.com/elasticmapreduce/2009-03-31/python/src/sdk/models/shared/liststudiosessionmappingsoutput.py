from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import sessionmappingsummary


@dataclass_json
@dataclass
class ListStudioSessionMappingsOutput:
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Marker' }})
    session_mappings: Optional[List[sessionmappingsummary.SessionMappingSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SessionMappings' }})
    
