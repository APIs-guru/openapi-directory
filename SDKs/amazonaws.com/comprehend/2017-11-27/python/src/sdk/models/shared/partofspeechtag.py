from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import partofspeechtagtype_enum


@dataclass_json
@dataclass
class PartOfSpeechTag:
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Score' }})
    tag: Optional[partofspeechtagtype_enum.PartOfSpeechTagTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tag' }})
    
