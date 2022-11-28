from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Attribute:
    r"""Attribute
    The attributes from the JSON payload that are made available by the input. Inputs are derived from messages sent to the AWS IoT Events system using <code>BatchPutMessage</code>. Each such message contains a JSON payload. Those attributes (and their paired values) specified here are available for use in the <code>condition</code> expressions used by detectors. 
    """
    
    json_path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jsonPath') }})
    
