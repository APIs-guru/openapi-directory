from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StartConfigurationRecorderRequest:
    configuration_recorder_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigurationRecorderName' }})
    
