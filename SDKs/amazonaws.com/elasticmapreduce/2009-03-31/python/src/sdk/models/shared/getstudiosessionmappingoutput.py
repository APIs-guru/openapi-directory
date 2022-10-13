from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import sessionmappingdetail


@dataclass_json
@dataclass
class GetStudioSessionMappingOutput:
    session_mapping: Optional[sessionmappingdetail.SessionMappingDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SessionMapping' }})
    
