from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import partofspeechtag


@dataclass_json
@dataclass
class SyntaxToken:
    begin_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BeginOffset' }})
    end_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndOffset' }})
    part_of_speech: Optional[partofspeechtag.PartOfSpeechTag] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PartOfSpeech' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Text' }})
    token_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TokenId' }})
    
