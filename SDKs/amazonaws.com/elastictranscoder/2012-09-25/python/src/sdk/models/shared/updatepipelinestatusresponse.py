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
class UpdatePipelineStatusResponse:
    r"""UpdatePipelineStatusResponse
    When you update status for a pipeline, Elastic Transcoder returns the values that you specified in the request.
    """
    
    pipeline: Optional[Pipeline] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Pipeline') }})
    
