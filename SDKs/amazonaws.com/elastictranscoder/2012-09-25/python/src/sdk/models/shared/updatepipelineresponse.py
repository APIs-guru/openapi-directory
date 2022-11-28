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
class UpdatePipelineResponse:
    r"""UpdatePipelineResponse
    When you update a pipeline, Elastic Transcoder returns the values that you specified in the request.
    """
    
    pipeline: Optional[Pipeline] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Pipeline') }})
    warnings: Optional[List[Warning]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Warnings') }})
    
