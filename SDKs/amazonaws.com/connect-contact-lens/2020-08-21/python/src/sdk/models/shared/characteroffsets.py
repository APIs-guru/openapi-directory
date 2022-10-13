from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CharacterOffsets:
    begin_offset_char: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BeginOffsetChar' }})
    end_offset_char: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndOffsetChar' }})
    
