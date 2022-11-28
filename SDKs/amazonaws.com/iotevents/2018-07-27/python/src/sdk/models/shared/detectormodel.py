from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DetectorModel:
    r"""DetectorModel
    Information about the detector model.
    """
    
    detector_model_configuration: Optional[DetectorModelConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectorModelConfiguration') }})
    detector_model_definition: Optional[DetectorModelDefinition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectorModelDefinition') }})
    
