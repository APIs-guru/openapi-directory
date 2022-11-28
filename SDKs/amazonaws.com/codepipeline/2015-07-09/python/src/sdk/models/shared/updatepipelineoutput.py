from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdatePipelineOutput:
    r"""UpdatePipelineOutput
    Represents the output of an <code>UpdatePipeline</code> action.
    """
    
    pipeline: Optional[PipelineDeclaration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipeline') }})
    
