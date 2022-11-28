from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MonitoringConfiguration:
    r"""MonitoringConfiguration
    Configuration setting for monitoring.
    """
    
    cloud_watch_monitoring_configuration: Optional[CloudWatchMonitoringConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudWatchMonitoringConfiguration') }})
    persistent_app_ui: Optional[PersistentAppUIEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('persistentAppUI') }})
    s3_monitoring_configuration: Optional[S3MonitoringConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3MonitoringConfiguration') }})
    
