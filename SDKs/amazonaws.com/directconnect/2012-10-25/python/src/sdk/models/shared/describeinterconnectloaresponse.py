from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import loa


@dataclass_json
@dataclass
class DescribeInterconnectLoaResponse:
    loa: Optional[loa.Loa] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loa' }})
    
