from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import analysisstatus_enum


@dataclass_json
@dataclass
class DescribeDetectorModelAnalysisResponse:
    status: Optional[analysisstatus_enum.AnalysisStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
