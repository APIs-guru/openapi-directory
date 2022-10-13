from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import validationerror


@dataclass_json
@dataclass
class ValidateSecurityProfileBehaviorsResponse:
    valid: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valid' }})
    validation_errors: Optional[List[validationerror.ValidationError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validationErrors' }})
    
