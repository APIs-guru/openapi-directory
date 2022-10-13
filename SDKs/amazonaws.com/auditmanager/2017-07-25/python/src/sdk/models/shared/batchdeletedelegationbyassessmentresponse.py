from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import batchdeletedelegationbyassessmenterror


@dataclass_json
@dataclass
class BatchDeleteDelegationByAssessmentResponse:
    errors: Optional[List[batchdeletedelegationbyassessmenterror.BatchDeleteDelegationByAssessmentError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    
