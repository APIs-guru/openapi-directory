from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import runtimeconfiguration


@dataclass_json
@dataclass
class UpdateRuntimeConfigurationInput:
    fleet_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetId' }})
    runtime_configuration: runtimeconfiguration.RuntimeConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuntimeConfiguration' }})
    
