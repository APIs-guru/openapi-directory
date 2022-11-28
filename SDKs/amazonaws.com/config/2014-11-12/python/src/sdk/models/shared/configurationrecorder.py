from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConfigurationRecorder:
    r"""ConfigurationRecorder
    An object that represents the recording of configuration changes of an Amazon Web Services resource.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    recording_group: Optional[RecordingGroup] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordingGroup') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleARN') }})
    
