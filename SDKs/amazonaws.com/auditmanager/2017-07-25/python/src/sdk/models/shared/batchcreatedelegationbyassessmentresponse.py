from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import delegation
from . import batchcreatedelegationbyassessmenterror


@dataclass_json
@dataclass
class BatchCreateDelegationByAssessmentResponse:
    delegations: Optional[List[delegation.Delegation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delegations' }})
    errors: Optional[List[batchcreatedelegationbyassessmenterror.BatchCreateDelegationByAssessmentError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    
