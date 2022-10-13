from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import validationerror
from . import validationwarning


@dataclass_json
@dataclass
class PutPipelineDefinitionOutput:
    errored: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errored' }})
    validation_errors: Optional[List[validationerror.ValidationError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validationErrors' }})
    validation_warnings: Optional[List[validationwarning.ValidationWarning]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validationWarnings' }})
    
