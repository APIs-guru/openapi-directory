from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class WebBackendListConnectionsForWorkspaceRequest:
    request: shared.WorkspaceIDRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class WebBackendListConnectionsForWorkspaceResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_input_exception_info: Optional[shared.InvalidInputExceptionInfo] = field(default=None)
    not_found_known_exception_info: Optional[shared.NotFoundKnownExceptionInfo] = field(default=None)
    web_backend_connection_read_list: Optional[shared.WebBackendConnectionReadList] = field(default=None)
    
