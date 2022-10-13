from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import antennadownlinkconfig
from . import antennadownlinkdemoddecodeconfig
from . import antennauplinkconfig
from . import dataflowendpointconfig
from . import s3recordingconfig
from . import trackingconfig
from . import uplinkechoconfig


@dataclass_json
@dataclass
class ConfigTypeData:
    antenna_downlink_config: Optional[antennadownlinkconfig.AntennaDownlinkConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'antennaDownlinkConfig' }})
    antenna_downlink_demod_decode_config: Optional[antennadownlinkdemoddecodeconfig.AntennaDownlinkDemodDecodeConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'antennaDownlinkDemodDecodeConfig' }})
    antenna_uplink_config: Optional[antennauplinkconfig.AntennaUplinkConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'antennaUplinkConfig' }})
    dataflow_endpoint_config: Optional[dataflowendpointconfig.DataflowEndpointConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataflowEndpointConfig' }})
    s3_recording_config: Optional[s3recordingconfig.S3RecordingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3RecordingConfig' }})
    tracking_config: Optional[trackingconfig.TrackingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trackingConfig' }})
    uplink_echo_config: Optional[uplinkechoconfig.UplinkEchoConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uplinkEchoConfig' }})
    
