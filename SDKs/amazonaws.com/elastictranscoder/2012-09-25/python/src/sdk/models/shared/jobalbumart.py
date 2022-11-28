from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class JobAlbumArt:
    r"""JobAlbumArt
    The .jpg or .png file associated with an audio file.
    """
    
    artwork: Optional[List[Artwork]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Artwork') }})
    merge_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MergePolicy') }})
    
