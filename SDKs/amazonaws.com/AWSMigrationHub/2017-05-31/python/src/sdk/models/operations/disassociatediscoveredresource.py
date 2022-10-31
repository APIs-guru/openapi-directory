from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DisassociateDiscoveredResourceXAmzTargetEnum(str, Enum):
    AWS_MIGRATION_HUB_DISASSOCIATE_DISCOVERED_RESOURCE = "AWSMigrationHub.DisassociateDiscoveredResource"


@dataclass
class DisassociateDiscoveredResourceHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: DisassociateDiscoveredResourceXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class DisassociateDiscoveredResourceRequest:
    headers: DisassociateDiscoveredResourceHeaders = field(default=None)
    request: shared.DisassociateDiscoveredResourceRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DisassociateDiscoveredResourceResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    disassociate_discovered_resource_result: Optional[dict[str, Any]] = field(default=None)
    dry_run_operation: Optional[Any] = field(default=None)
    home_region_not_set_exception: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    unauthorized_operation: Optional[Any] = field(default=None)
    
