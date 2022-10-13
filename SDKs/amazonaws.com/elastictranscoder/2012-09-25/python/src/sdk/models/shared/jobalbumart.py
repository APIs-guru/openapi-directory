from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import artwork


@dataclass_json
@dataclass
class JobAlbumArt:
    artwork: Optional[List[artwork.Artwork]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Artwork' }})
    merge_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MergePolicy' }})
    
