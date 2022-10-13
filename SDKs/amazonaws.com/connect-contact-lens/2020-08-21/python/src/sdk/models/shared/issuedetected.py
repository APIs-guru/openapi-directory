from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import characteroffsets


@dataclass_json
@dataclass
class IssueDetected:
    character_offsets: characteroffsets.CharacterOffsets = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CharacterOffsets' }})
    
