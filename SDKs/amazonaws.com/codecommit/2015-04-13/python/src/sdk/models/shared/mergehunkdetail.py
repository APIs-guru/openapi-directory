from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MergeHunkDetail:
    end_line: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endLine' }})
    hunk_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hunkContent' }})
    start_line: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startLine' }})
    
