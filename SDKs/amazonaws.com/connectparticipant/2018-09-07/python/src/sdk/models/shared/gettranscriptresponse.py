from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import item


@dataclass_json
@dataclass
class GetTranscriptResponse:
    initial_contact_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InitialContactId' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    transcript: Optional[List[item.Item]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Transcript' }})
    
