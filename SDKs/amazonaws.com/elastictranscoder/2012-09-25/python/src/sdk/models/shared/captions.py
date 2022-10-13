from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import captionformat
from . import captionsource


@dataclass_json
@dataclass
class Captions:
    caption_formats: Optional[List[captionformat.CaptionFormat]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CaptionFormats' }})
    caption_sources: Optional[List[captionsource.CaptionSource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CaptionSources' }})
    merge_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MergePolicy' }})
    
