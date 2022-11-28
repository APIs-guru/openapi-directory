from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OutlierDetection:
    r"""OutlierDetection
    An object that represents the outlier detection for a virtual node's listener.
    """
    
    base_ejection_duration: Duration = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseEjectionDuration') }})
    interval: Duration = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interval') }})
    max_ejection_percent: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxEjectionPercent') }})
    max_server_errors: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxServerErrors') }})
    
