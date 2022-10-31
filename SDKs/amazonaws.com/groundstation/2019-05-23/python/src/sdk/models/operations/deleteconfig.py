from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DeleteConfigConfigTypeEnum(str, Enum):
    ANTENNA_DOWNLINK = "antenna-downlink"
    ANTENNA_DOWNLINK_DEMOD_DECODE = "antenna-downlink-demod-decode"
    ANTENNA_UPLINK = "antenna-uplink"
    DATAFLOW_ENDPOINT = "dataflow-endpoint"
    TRACKING = "tracking"
    UPLINK_ECHO = "uplink-echo"
    S3_RECORDING = "s3-recording"


@dataclass
class DeleteConfigPathParams:
    config_id: str = field(default=None, metadata={'path_param': { 'field_name': 'configId', 'style': 'simple', 'explode': False }})
    config_type: DeleteConfigConfigTypeEnum = field(default=None, metadata={'path_param': { 'field_name': 'configType', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteConfigHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteConfigRequest:
    path_params: DeleteConfigPathParams = field(default=None)
    headers: DeleteConfigHeaders = field(default=None)
    

@dataclass
class DeleteConfigResponse:
    config_id_response: Optional[shared.ConfigIDResponse] = field(default=None)
    content_type: str = field(default=None)
    dependency_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
