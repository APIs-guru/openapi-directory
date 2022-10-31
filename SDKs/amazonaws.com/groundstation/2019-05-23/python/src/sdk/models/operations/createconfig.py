from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateConfigHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateConfigRequestBodyConfigData:
    antenna_downlink_config: Optional[shared.AntennaDownlinkConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'antennaDownlinkConfig' }})
    antenna_downlink_demod_decode_config: Optional[shared.AntennaDownlinkDemodDecodeConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'antennaDownlinkDemodDecodeConfig' }})
    antenna_uplink_config: Optional[shared.AntennaUplinkConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'antennaUplinkConfig' }})
    dataflow_endpoint_config: Optional[shared.DataflowEndpointConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataflowEndpointConfig' }})
    s3_recording_config: Optional[shared.S3RecordingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3RecordingConfig' }})
    tracking_config: Optional[shared.TrackingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trackingConfig' }})
    uplink_echo_config: Optional[shared.UplinkEchoConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uplinkEchoConfig' }})
    

@dataclass_json
@dataclass
class CreateConfigRequestBody:
    config_data: CreateConfigRequestBodyConfigData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configData' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class CreateConfigRequest:
    headers: CreateConfigHeaders = field(default=None)
    request: CreateConfigRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateConfigResponse:
    config_id_response: Optional[shared.ConfigIDResponse] = field(default=None)
    content_type: str = field(default=None)
    dependency_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    resource_limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
