from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import preset


@dataclass_json
@dataclass
class ListPresetsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextPageToken' }})
    presets: Optional[List[preset.Preset]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Presets' }})
    
