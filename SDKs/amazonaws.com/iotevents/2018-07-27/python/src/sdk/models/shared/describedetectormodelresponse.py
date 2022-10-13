from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import detectormodel


@dataclass_json
@dataclass
class DescribeDetectorModelResponse:
    detector_model: Optional[detectormodel.DetectorModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectorModel' }})
    
