from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import detectordebugoption
from . import logginglevel_enum


@dataclass_json
@dataclass
class LoggingOptions:
    detector_debug_options: Optional[List[detectordebugoption.DetectorDebugOption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectorDebugOptions' }})
    enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    level: logginglevel_enum.LoggingLevelEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'level' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    
