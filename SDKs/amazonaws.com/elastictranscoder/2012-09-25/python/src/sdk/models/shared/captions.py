from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Captions:
    r"""Captions
    The captions to be created, if any.
    """
    
    caption_formats: Optional[List[CaptionFormat]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CaptionFormats') }})
    caption_sources: Optional[List[CaptionSource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CaptionSources') }})
    merge_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MergePolicy') }})
    
