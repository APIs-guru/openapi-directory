from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import analysisresultlevel_enum
from . import analysisresultlocation


@dataclass_json
@dataclass
class AnalysisResult:
    level: Optional[analysisresultlevel_enum.AnalysisResultLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'level' }})
    locations: Optional[List[analysisresultlocation.AnalysisResultLocation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locations' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
