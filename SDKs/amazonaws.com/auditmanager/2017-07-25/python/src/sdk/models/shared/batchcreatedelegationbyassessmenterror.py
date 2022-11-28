from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchCreateDelegationByAssessmentError:
    r"""BatchCreateDelegationByAssessmentError
     An error entity for the <code>BatchCreateDelegationByAssessment</code> API. This is used to provide more meaningful errors than a simple string message. 
    """
    
    create_delegation_request: Optional[CreateDelegationRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createDelegationRequest') }})
    error_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorCode') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    
