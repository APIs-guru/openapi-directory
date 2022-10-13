from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DeliverConfigSnapshotXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_DELIVER_CONFIG_SNAPSHOT = "StarlingDoveService.DeliverConfigSnapshot"


@dataclass
class DeliverConfigSnapshotHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: DeliverConfigSnapshotXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class DeliverConfigSnapshotRequest:
    headers: DeliverConfigSnapshotHeaders = field(default=None)
    request: shared.DeliverConfigSnapshotRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeliverConfigSnapshotResponse:
    content_type: str = field(default=None)
    deliver_config_snapshot_response: Optional[shared.DeliverConfigSnapshotResponse] = field(default=None)
    no_available_configuration_recorder_exception: Optional[Any] = field(default=None)
    no_running_configuration_recorder_exception: Optional[Any] = field(default=None)
    no_such_delivery_channel_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
