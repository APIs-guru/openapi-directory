from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import telemetryconfiguration


@dataclass_json
@dataclass
class RuntimeConfiguration:
    telemetry_configuration: Optional[telemetryconfiguration.TelemetryConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TelemetryConfiguration' }})
    
