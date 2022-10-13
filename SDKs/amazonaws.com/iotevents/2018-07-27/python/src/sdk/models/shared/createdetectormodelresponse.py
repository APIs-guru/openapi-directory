from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import detectormodelconfiguration


@dataclass_json
@dataclass
class CreateDetectorModelResponse:
    detector_model_configuration: Optional[detectormodelconfiguration.DetectorModelConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectorModelConfiguration' }})
    
