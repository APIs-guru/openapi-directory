from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutConfigurationRecorderRequest:
    r"""PutConfigurationRecorderRequest
    The input for the <a>PutConfigurationRecorder</a> action.
    """
    
    configuration_recorder: ConfigurationRecorder = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationRecorder') }})
    
