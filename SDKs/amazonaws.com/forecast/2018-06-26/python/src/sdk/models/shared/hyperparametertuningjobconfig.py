from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import parameterranges


@dataclass_json
@dataclass
class HyperParameterTuningJobConfig:
    parameter_ranges: Optional[parameterranges.ParameterRanges] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParameterRanges' }})
    
