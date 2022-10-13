from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListDestinationsForWorkspaceRequest:
    request: shared.WorkspaceIDRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListDestinationsForWorkspaceResponse:
    content_type: str = field(default=None)
    destination_read_list: Optional[shared.DestinationReadList] = field(default=None)
    invalid_input_exception_info: Optional[shared.InvalidInputExceptionInfo] = field(default=None)
    not_found_known_exception_info: Optional[shared.NotFoundKnownExceptionInfo] = field(default=None)
    status_code: int = field(default=None)
    
