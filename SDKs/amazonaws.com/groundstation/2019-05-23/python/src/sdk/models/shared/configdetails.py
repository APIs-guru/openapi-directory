from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import antennademoddecodedetails
from . import endpointdetails
from . import s3recordingdetails


@dataclass_json
@dataclass
class ConfigDetails:
    antenna_demod_decode_details: Optional[antennademoddecodedetails.AntennaDemodDecodeDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'antennaDemodDecodeDetails' }})
    endpoint_details: Optional[endpointdetails.EndpointDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpointDetails' }})
    s3_recording_details: Optional[s3recordingdetails.S3RecordingDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3RecordingDetails' }})
    
