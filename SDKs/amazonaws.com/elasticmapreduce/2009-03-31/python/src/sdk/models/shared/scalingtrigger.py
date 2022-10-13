from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import cloudwatchalarmdefinition


@dataclass_json
@dataclass
class ScalingTrigger:
    cloud_watch_alarm_definition: cloudwatchalarmdefinition.CloudWatchAlarmDefinition = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchAlarmDefinition' }})
    
