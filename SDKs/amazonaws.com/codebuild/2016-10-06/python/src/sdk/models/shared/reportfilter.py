from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import reportstatustype_enum


@dataclass_json
@dataclass
class ReportFilter:
    status: Optional[reportstatustype_enum.ReportStatusTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
