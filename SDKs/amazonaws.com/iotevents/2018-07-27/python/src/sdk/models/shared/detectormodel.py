from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import detectormodelconfiguration
from . import detectormodeldefinition


@dataclass_json
@dataclass
class DetectorModel:
    detector_model_configuration: Optional[detectormodelconfiguration.DetectorModelConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectorModelConfiguration' }})
    detector_model_definition: Optional[detectormodeldefinition.DetectorModelDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectorModelDefinition' }})
    
