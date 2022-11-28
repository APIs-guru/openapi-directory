from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ValidatePipelineDefinitionOutput:
    r"""ValidatePipelineDefinitionOutput
    Contains the output of ValidatePipelineDefinition.
    """
    
    errored: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errored') }})
    validation_errors: Optional[List[ValidationError]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validationErrors') }})
    validation_warnings: Optional[List[ValidationWarning]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validationWarnings') }})
    
