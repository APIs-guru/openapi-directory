from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConfigDetails:
    r"""ConfigDetails
    Details for certain <code>Config</code> object types in a contact.
    """
    
    antenna_demod_decode_details: Optional[AntennaDemodDecodeDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('antennaDemodDecodeDetails') }})
    endpoint_details: Optional[EndpointDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointDetails') }})
    s3_recording_details: Optional[S3RecordingDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3RecordingDetails') }})
    
