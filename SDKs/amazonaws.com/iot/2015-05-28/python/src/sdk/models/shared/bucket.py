from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Bucket:
    r"""Bucket
    A count of documents that meets a specific aggregation criteria.
    """
    
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    key_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyValue') }})
    
