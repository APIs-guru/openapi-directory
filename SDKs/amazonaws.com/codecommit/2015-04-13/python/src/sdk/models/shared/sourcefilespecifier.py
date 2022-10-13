from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SourceFileSpecifier:
    file_path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filePath' }})
    is_move: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isMove' }})
    
