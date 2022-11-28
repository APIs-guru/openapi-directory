from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConfigTypeData:
    r"""ConfigTypeData
    <p>Object containing the parameters of a <code>Config</code>.</p> <p>See the subtype definitions for what each type of <code>Config</code> contains.</p>
    """
    
    antenna_downlink_config: Optional[AntennaDownlinkConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('antennaDownlinkConfig') }})
    antenna_downlink_demod_decode_config: Optional[AntennaDownlinkDemodDecodeConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('antennaDownlinkDemodDecodeConfig') }})
    antenna_uplink_config: Optional[AntennaUplinkConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('antennaUplinkConfig') }})
    dataflow_endpoint_config: Optional[DataflowEndpointConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataflowEndpointConfig') }})
    s3_recording_config: Optional[S3RecordingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3RecordingConfig') }})
    tracking_config: Optional[TrackingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingConfig') }})
    uplink_echo_config: Optional[UplinkEchoConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uplinkEchoConfig') }})
    
