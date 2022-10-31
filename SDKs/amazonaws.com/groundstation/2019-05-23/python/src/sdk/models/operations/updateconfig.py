from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class UpdateConfigConfigTypeEnum(str, Enum):
    ANTENNA_DOWNLINK = "antenna-downlink"
    ANTENNA_DOWNLINK_DEMOD_DECODE = "antenna-downlink-demod-decode"
    ANTENNA_UPLINK = "antenna-uplink"
    DATAFLOW_ENDPOINT = "dataflow-endpoint"
    TRACKING = "tracking"
    UPLINK_ECHO = "uplink-echo"
    S3_RECORDING = "s3-recording"


@dataclass
class UpdateConfigPathParams:
    config_id: str = field(default=None, metadata={'path_param': { 'field_name': 'configId', 'style': 'simple', 'explode': False }})
    config_type: UpdateConfigConfigTypeEnum = field(default=None, metadata={'path_param': { 'field_name': 'configType', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateConfigHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateConfigRequestBodyConfigData:
    antenna_downlink_config: Optional[shared.AntennaDownlinkConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'antennaDownlinkConfig' }})
    antenna_downlink_demod_decode_config: Optional[shared.AntennaDownlinkDemodDecodeConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'antennaDownlinkDemodDecodeConfig' }})
    antenna_uplink_config: Optional[shared.AntennaUplinkConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'antennaUplinkConfig' }})
    dataflow_endpoint_config: Optional[shared.DataflowEndpointConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataflowEndpointConfig' }})
    s3_recording_config: Optional[shared.S3RecordingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3RecordingConfig' }})
    tracking_config: Optional[shared.TrackingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trackingConfig' }})
    uplink_echo_config: Optional[shared.UplinkEchoConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uplinkEchoConfig' }})
    

@dataclass_json
@dataclass
class UpdateConfigRequestBody:
    config_data: UpdateConfigRequestBodyConfigData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configData' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass
class UpdateConfigRequest:
    path_params: UpdateConfigPathParams = field(default=None)
    headers: UpdateConfigHeaders = field(default=None)
    request: UpdateConfigRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateConfigResponse:
    config_id_response: Optional[shared.ConfigIDResponse] = field(default=None)
    content_type: str = field(default=None)
    dependency_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
