from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ScalingTrigger:
    r"""ScalingTrigger
    The conditions that trigger an automatic scaling activity.
    """
    
    cloud_watch_alarm_definition: CloudWatchAlarmDefinition = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchAlarmDefinition') }})
    
