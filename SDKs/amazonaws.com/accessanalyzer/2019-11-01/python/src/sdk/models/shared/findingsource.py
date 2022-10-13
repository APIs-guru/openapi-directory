from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import findingsourcedetail
from . import findingsourcetype_enum


@dataclass_json
@dataclass
class FindingSource:
    detail: Optional[findingsourcedetail.FindingSourceDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    type: findingsourcetype_enum.FindingSourceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
