from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared

class ListVirtualInterfaceTestHistoryXAmzTargetEnum(str, Enum):
    OVERTURE_SERVICE_LIST_VIRTUAL_INTERFACE_TEST_HISTORY = "OvertureService.ListVirtualInterfaceTestHistory"


@dataclass
class ListVirtualInterfaceTestHistoryHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: ListVirtualInterfaceTestHistoryXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListVirtualInterfaceTestHistoryRequest:
    headers: ListVirtualInterfaceTestHistoryHeaders = field(default=None)
    request: shared.ListVirtualInterfaceTestHistoryRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListVirtualInterfaceTestHistoryResponse:
    content_type: str = field(default=None)
    direct_connect_client_exception: Optional[Any] = field(default=None)
    direct_connect_server_exception: Optional[Any] = field(default=None)
    list_virtual_interface_test_history_response: Optional[shared.ListVirtualInterfaceTestHistoryResponse] = field(default=None)
    status_code: int = field(default=None)
    
