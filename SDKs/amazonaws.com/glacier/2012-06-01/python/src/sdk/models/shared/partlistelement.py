from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PartListElement:
    r"""PartListElement
    A list of the part sizes of the multipart upload.
    """
    
    range_in_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RangeInBytes') }})
    sha256_tree_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SHA256TreeHash') }})
    
