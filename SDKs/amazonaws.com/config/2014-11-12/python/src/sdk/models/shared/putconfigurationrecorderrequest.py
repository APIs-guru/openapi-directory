from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import configurationrecorder


@dataclass_json
@dataclass
class PutConfigurationRecorderRequest:
    configuration_recorder: configurationrecorder.ConfigurationRecorder = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigurationRecorder' }})
    
