from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateProgressUpdateStreamXAmzTargetEnum(str, Enum):
    AWS_MIGRATION_HUB_CREATE_PROGRESS_UPDATE_STREAM = "AWSMigrationHub.CreateProgressUpdateStream"


@dataclass
class CreateProgressUpdateStreamHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: CreateProgressUpdateStreamXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class CreateProgressUpdateStreamRequest:
    headers: CreateProgressUpdateStreamHeaders = field(default=None)
    request: shared.CreateProgressUpdateStreamRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateProgressUpdateStreamResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_progress_update_stream_result: Optional[dict[str, Any]] = field(default=None)
    dry_run_operation: Optional[Any] = field(default=None)
    home_region_not_set_exception: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    unauthorized_operation: Optional[Any] = field(default=None)
    
