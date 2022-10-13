from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import captionsource


@dataclass_json
@dataclass
class InputCaptions:
    caption_sources: Optional[List[captionsource.CaptionSource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CaptionSources' }})
    merge_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MergePolicy' }})
    
