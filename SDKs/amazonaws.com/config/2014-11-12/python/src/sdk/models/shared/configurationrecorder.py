from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import recordinggroup


@dataclass_json
@dataclass
class ConfigurationRecorder:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    recording_group: Optional[recordinggroup.RecordingGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recordingGroup' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleARN' }})
    
