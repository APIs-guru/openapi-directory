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
class GetPipelineStateOutput:
    r"""GetPipelineStateOutput
    Represents the output of a <code>GetPipelineState</code> action.
    """
    
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    pipeline_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineName') }})
    pipeline_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineVersion') }})
    stage_states: Optional[List[StageState]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stageStates') }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
