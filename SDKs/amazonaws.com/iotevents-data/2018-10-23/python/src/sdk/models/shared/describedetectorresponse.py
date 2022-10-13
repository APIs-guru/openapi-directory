from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import detector


@dataclass_json
@dataclass
class DescribeDetectorResponse:
    detector: Optional[detector.Detector] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detector' }})
    
