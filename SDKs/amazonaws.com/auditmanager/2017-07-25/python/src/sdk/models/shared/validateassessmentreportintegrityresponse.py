from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ValidateAssessmentReportIntegrityResponse:
    signature_algorithm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signatureAlgorithm' }})
    signature_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signatureDateTime' }})
    signature_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signatureKeyId' }})
    signature_valid: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signatureValid' }})
    validation_errors: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validationErrors' }})
    
