from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateWorkspaceRequest:
    request: shared.WorkspaceUpdate = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateWorkspaceResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_input_exception_info: Optional[shared.InvalidInputExceptionInfo] = field(default=None)
    not_found_known_exception_info: Optional[shared.NotFoundKnownExceptionInfo] = field(default=None)
    workspace_read: Optional[shared.WorkspaceRead] = field(default=None)
    
