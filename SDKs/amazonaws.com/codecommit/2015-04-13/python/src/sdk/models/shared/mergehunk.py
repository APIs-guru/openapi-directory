from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import mergehunkdetail
from . import mergehunkdetail
from . import mergehunkdetail


@dataclass_json
@dataclass
class MergeHunk:
    base: Optional[mergehunkdetail.MergeHunkDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'base' }})
    destination: Optional[mergehunkdetail.MergeHunkDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    is_conflict: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isConflict' }})
    source: Optional[mergehunkdetail.MergeHunkDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    
