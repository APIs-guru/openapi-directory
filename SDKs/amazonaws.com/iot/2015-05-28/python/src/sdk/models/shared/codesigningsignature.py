from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CodeSigningSignature:
    inline_document: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inlineDocument' }})
    
