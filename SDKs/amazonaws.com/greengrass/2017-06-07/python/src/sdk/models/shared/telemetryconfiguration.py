from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TelemetryConfiguration:
    r"""TelemetryConfiguration
    Configuration settings for running telemetry.
    """
    
    telemetry: TelemetryEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Telemetry') }})
    configuration_sync_status: Optional[ConfigurationSyncStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationSyncStatus') }})
    
