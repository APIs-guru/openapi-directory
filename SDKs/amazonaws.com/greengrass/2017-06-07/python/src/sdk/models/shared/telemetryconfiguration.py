from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import configurationsyncstatus_enum
from . import telemetry_enum


@dataclass_json
@dataclass
class TelemetryConfiguration:
    configuration_sync_status: Optional[configurationsyncstatus_enum.ConfigurationSyncStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigurationSyncStatus' }})
    telemetry: telemetry_enum.TelemetryEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Telemetry' }})
    
