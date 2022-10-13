from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import createdelegationrequest


@dataclass_json
@dataclass
class BatchCreateDelegationByAssessmentError:
    create_delegation_request: Optional[createdelegationrequest.CreateDelegationRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createDelegationRequest' }})
    error_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorCode' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorMessage' }})
    
