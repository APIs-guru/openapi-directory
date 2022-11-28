from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutPipelineDefinitionOutput:
    r"""PutPipelineDefinitionOutput
    Contains the output of PutPipelineDefinition.
    """
    
    errored: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errored') }})
    validation_errors: Optional[List[ValidationError]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validationErrors') }})
    validation_warnings: Optional[List[ValidationWarning]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validationWarnings') }})
    
