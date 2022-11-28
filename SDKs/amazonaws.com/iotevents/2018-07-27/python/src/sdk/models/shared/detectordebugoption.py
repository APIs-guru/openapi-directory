from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DetectorDebugOption:
    r"""DetectorDebugOption
    The detector model and the specific detectors (instances) for which the logging level is given.
    """
    
    detector_model_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectorModelName') }})
    key_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyValue') }})
    
