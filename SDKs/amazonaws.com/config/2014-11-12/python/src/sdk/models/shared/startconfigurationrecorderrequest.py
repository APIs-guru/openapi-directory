from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class StartConfigurationRecorderRequest:
    r"""StartConfigurationRecorderRequest
    The input for the <a>StartConfigurationRecorder</a> action.
    """
    
    configuration_recorder_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationRecorderName') }})
    
