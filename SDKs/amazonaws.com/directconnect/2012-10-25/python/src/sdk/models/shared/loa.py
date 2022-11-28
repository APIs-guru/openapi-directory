from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Loa:
    r"""Loa
    Information about a Letter of Authorization - Connecting Facility Assignment (LOA-CFA) for a connection.
    """
    
    loa_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loaContent') }})
    loa_content_type: Optional[LoaContentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loaContentType') }})
    
