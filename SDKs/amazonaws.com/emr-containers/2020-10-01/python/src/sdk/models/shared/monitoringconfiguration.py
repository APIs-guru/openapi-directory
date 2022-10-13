from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import cloudwatchmonitoringconfiguration
from . import persistentappui_enum
from . import s3monitoringconfiguration


@dataclass_json
@dataclass
class MonitoringConfiguration:
    cloud_watch_monitoring_configuration: Optional[cloudwatchmonitoringconfiguration.CloudWatchMonitoringConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudWatchMonitoringConfiguration' }})
    persistent_app_ui: Optional[persistentappui_enum.PersistentAppUIEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'persistentAppUI' }})
    s3_monitoring_configuration: Optional[s3monitoringconfiguration.S3MonitoringConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3MonitoringConfiguration' }})
    
