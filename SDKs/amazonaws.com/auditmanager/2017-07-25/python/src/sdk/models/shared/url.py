from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class URL:
    hyperlink_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hyperlinkName' }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    
