from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteConfigurationRecorderRequest:
    r"""DeleteConfigurationRecorderRequest
    The request object for the <code>DeleteConfigurationRecorder</code> action.
    """
    
    configuration_recorder_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationRecorderName') }})
    
